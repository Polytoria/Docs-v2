const fs = require("fs")
const yaml = require("yaml")
const path = require("path")
const { XMLBuilder, XMLParser } = require("fast-xml-parser");

const xmlAPIPath = path.join(__dirname, "../", "xml", "types")
const xmlEnumPath = path.join(__dirname, "../", "xml", "enums")
const yamlAPIPath = path.join(__dirname, "../", "yaml", "types")
const yamlEnumPath = path.join(__dirname, "../", "yaml", "enums")

if (!fs.existsSync(xmlAPIPath)) {
    fs.mkdirSync(xmlAPIPath, { recursive: true })
}

if (!fs.existsSync(xmlEnumPath)) {
    fs.mkdirSync(xmlEnumPath, { recursive: true })
}

if (!fs.existsSync(yamlAPIPath)) {
    fs.mkdirSync(yamlAPIPath, { recursive: true })
}

if (!fs.existsSync(yamlEnumPath)) {
    fs.mkdirSync(yamlEnumPath, { recursive: true })
}

const data = JSON.parse(fs.readFileSync("def.json", "utf-8"))

const parser = new XMLParser();

// Process Classes
for (const c of data.Classes) {
    let xmlPath = path.join(xmlAPIPath, c.Name + ".xml")
    let yamlPath = path.join(yamlAPIPath, c.Name + ".yaml")

    let obj = {
        ...c,
        Properties: [],
        Methods: [],
        Events: [],
    }

    // Load existing data if file exists
    let existingDescriptions = { Properties: {}, Methods: {}, Events: {} };
    let existingArguments = { Events: {} };
    let existingClassDescription = "Missing Documentation";

    if (fs.existsSync(xmlPath)) {
        const existingXml = fs.readFileSync(xmlPath, "utf-8");
        const existingData = parser.parse(existingXml);

        if (existingData.ClassDef) {
            // Preserve existing class description
            if (existingData.ClassDef.Description) {
                existingClassDescription = existingData.ClassDef.Description;
            }

            // Build lookup maps for existing descriptions
            if (existingData.ClassDef.Properties) {
                const props = Array.isArray(existingData.ClassDef.Properties)
                    ? existingData.ClassDef.Properties
                    : [existingData.ClassDef.Properties];
                props.forEach(p => {
                    if (p.Name) existingDescriptions.Properties[p.Name] = p.Description || "";
                });
            }

            if (existingData.ClassDef.Methods) {
                const methods = Array.isArray(existingData.ClassDef.Methods)
                    ? existingData.ClassDef.Methods
                    : [existingData.ClassDef.Methods];
                methods.forEach(m => {
                    if (m.Name) existingDescriptions.Methods[m.Name] = m.Description || "";
                });
            }

            if (existingData.ClassDef.Events) {
                const events = Array.isArray(existingData.ClassDef.Events)
                    ? existingData.ClassDef.Events
                    : [existingData.ClassDef.Events];
                events.forEach(e => {
                    if (e.Name) {
                        existingDescriptions.Events[e.Name] = e.Description || "";
                        existingArguments.Events[e.Name] = e.Arguments || "";
                    }
                });
            }
        }
    }

    // Add class description
    obj.Description = existingClassDescription ?? "";

    // Add properties
    for (const prop of c.Properties) {
        if (prop.IsObsolete) continue
        obj.Properties.push({
            ...prop,
            Description: existingDescriptions.Properties[prop.Name] || "Missing Documentation"
        })
    }

    // Add methods
    for (const m of c.Methods) {
        if (m.IsObsolete) continue
        obj.Methods.push({
            ...m,
            Description: existingDescriptions.Methods[m.Name] || "Missing Documentation"
        })
    }

    // Add events
    for (const e of c.Events) {
        obj.Events.push({
            ...e,
            Description: existingDescriptions.Events[e.Name] || "Missing Documentation",
            Arguments: existingArguments.Events[e.Name] || ""
        })
    }

    fs.writeFileSync(yamlPath, yaml.stringify(obj))
}

// Process Enums
for (const e of data.Enums) {
    let xmlPath = path.join(xmlEnumPath, e.Name + ".xml")
    let yamlPath = path.join(yamlEnumPath, e.Name + ".yaml")

    let obj = {
        ...e,
        Options: []
    }

    let existingDescriptions = {};
    let existingEnumDescription = "";
    if (fs.existsSync(xmlPath)) {
        const existingXml = fs.readFileSync(xmlPath, "utf-8");
        const existingData = parser.parse(existingXml);

        if (existingData.EnumDef) {
            existingEnumDescription = existingData.EnumDef.Description || "";

            if (existingData.EnumDef.Options) {
                const options = Array.isArray(existingData.EnumDef.Options)
                    ? existingData.EnumDef.Options
                    : [existingData.EnumDef.Options];
                options.forEach(o => {
                    if (o.Name) existingDescriptions[o.Name] = o.Description || "";
                });
            }
        }
    }

    // Add enum description
    obj.Description = existingEnumDescription || "Missing Documentation";

    // Add options
    for (const option of e.Options) {
        obj.Options.push({
            Name: option,
            Description: existingDescriptions[option] || ""
        })
    }

    fs.writeFileSync(yamlPath, yaml.stringify(obj))
}