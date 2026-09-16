const fs = require("fs")
const path = require("path")
const yaml = require("yaml")

const yamlAPIPath = path.join(__dirname, "../", "yaml", "types")
const yamlEnumPath = path.join(__dirname, "../", "yaml", "enums")

if (!fs.existsSync(yamlAPIPath)) {
    fs.mkdirSync(yamlAPIPath, { recursive: true })
}

if (!fs.existsSync(yamlEnumPath)) {
    fs.mkdirSync(yamlEnumPath, { recursive: true })
}

const data = JSON.parse(fs.readFileSync("def.json", "utf-8"))

// Track current classes and enums
const currentClasses = new Set(data.Classes.map(c => c.Name))
const currentEnums = new Set(data.Enums.map(e => e.Name))

// Clean up removed classes
if (fs.existsSync(yamlAPIPath)) {
    const existingFiles = fs.readdirSync(yamlAPIPath)
    for (const file of existingFiles) {
        if (file.endsWith('.yaml')) {
            const className = path.basename(file, '.yaml')
            if (!currentClasses.has(className)) {
                const filePath = path.join(yamlAPIPath, file)
                fs.unlinkSync(filePath)
                console.log(`Removed obsolete class: ${className}`)
            }
        }
    }
}

// Clean up removed enums
if (fs.existsSync(yamlEnumPath)) {
    const existingFiles = fs.readdirSync(yamlEnumPath)
    for (const file of existingFiles) {
        if (file.endsWith('.yaml')) {
            const enumName = path.basename(file, '.yaml')
            if (!currentEnums.has(enumName)) {
                const filePath = path.join(yamlEnumPath, file)
                fs.unlinkSync(filePath)
                console.log(`Removed obsolete enum: ${enumName}`)
            }
        }
    }
}

// Process Classes
for (const c of data.Classes) {
    let yamlPath = path.join(yamlAPIPath, c.Name + ".yaml")

    // Load existing data if file exists
    let existingDescriptions = { Properties: {}, Methods: {}, Events: {} };
    let existingParameterNames = { Events: {} };
    let existingClassDescription = "Missing Documentation";
    let existingClassCategory = "";

    if (fs.existsSync(yamlPath)) {
        const existingYaml = fs.readFileSync(yamlPath, "utf-8");
        const existingData = yaml.parse(existingYaml);

        // Preserve existing class description
        if (existingData.Description) {
            existingClassDescription = existingData.Description;
        }

        // Preserve existing category
        if (existingData.Category) {
            existingClassCategory = existingData.Category;
        }

        // Build lookup maps for existing descriptions
        if (existingData.Properties) {
            const props = Array.isArray(existingData.Properties)
                ? existingData.Properties
                : [existingData.Properties];
            props.forEach(p => {
                if (p.Name) existingDescriptions.Properties[p.Name] = p.Description || "";
            });
        }

        if (existingData.Methods) {
            const methods = Array.isArray(existingData.Methods)
                ? existingData.Methods
                : [existingData.Methods];
            methods.forEach(m => {
                if (m.Name) existingDescriptions.Methods[m.Name] = m.Description || "";
            });
        }

        if (existingData.Events) {
            const events = Array.isArray(existingData.Events)
                ? existingData.Events
                : [existingData.Events];
            events.forEach(e => {
                if (e.Name) {
                    existingDescriptions.Events[e.Name] = e.Description || "";
                    existingParameterNames.Events[e.Name] = e.Parameters.map(p => p.Name)
                }
            });
        }
    }

    let obj = {
        Name: c.Name,
        Description: existingClassDescription,
        Category: existingClassCategory,
        BaseType: c.BaseType,
        ...c,
        Properties: [],
        Methods: [],
        Events: [],
    }

    // Add properties
    for (const prop of c.Properties) {
        if (prop.ObsoletionInfo) continue
        obj.Properties.push({
            ...prop,
            Description: existingDescriptions.Properties[prop.Name] || "Missing Documentation"
        })
    }

    // Add methods
    for (const m of c.Methods) {
        if (m.ObsoletionInfo) continue

        // Ignore metamethods
        if (m.Name.startsWith("__")) continue
        obj.Methods.push({
            ...m,
            Description: existingDescriptions.Methods[m.Name] || "Missing Documentation"
        })
    }

    // Add events
    for (const e of c.Events) {
        const existingParamNames = existingParameterNames.Events[e.Name]
        if (existingParamNames) {
            e.Parameters.forEach((p, i) => {
                const paramName = existingParamNames[i]
                if (paramName) p.Name = paramName
            })
        }
        obj.Events.push({
            ...e,
            Description: existingDescriptions.Events[e.Name] || "Missing Documentation",
        })
    }

    fs.writeFileSync(yamlPath, yaml.stringify(obj))
}

// Process Enums
for (const e of data.Enums) {
    let yamlPath = path.join(yamlEnumPath, e.Name + ".yaml")

    let obj = {
        ...e,
        Options: []
    }

    let existingDescriptions = {};
    let existingEnumDescription = "";
    if (fs.existsSync(yamlPath)) {
        const existingYaml = fs.readFileSync(yamlPath, "utf-8");
        const existingData = yaml.parse(existingYaml);

        existingEnumDescription = existingData.Description || "";

        if (existingData.Options) {
            const options = Array.isArray(existingData.Options)
                ? existingData.Options
                : [existingData.Options];
            options.forEach(o => {
                if (o.Name) existingDescriptions[o.Name] = o.Description || "";
            });
        }
    }

    // Add enum description
    obj.Description = existingEnumDescription || "";

    // Add options
    for (const option of e.Options) {
        obj.Options.push({
            Name: option,
            Description: existingDescriptions[option] || ""
        })
    }

    fs.writeFileSync(yamlPath, yaml.stringify(obj))
}