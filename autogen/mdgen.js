const fs = require("fs")
const path = require("path")
const yaml = require("yaml")

const yamlAPIPath = path.join(__dirname, "../", "yaml", "types")
const mdAPIPath = path.join(__dirname, "../", "docs/api", "types")
const iconDataPath = path.join(__dirname, "../", "docs/theme/.icons", "polytoria")
const yamlEnumPath = path.join(__dirname, "../", "yaml", "enums")
const mdEnumPath = path.join(__dirname, "../", "docs/api", "enums")

if (!fs.existsSync(mdAPIPath)) {
    fs.mkdirSync(mdAPIPath, { recursive: true })
}

if (!fs.existsSync(yamlAPIPath)) {
    fs.mkdirSync(yamlAPIPath, { recursive: true })
}

if (!fs.existsSync(mdEnumPath)) {
    fs.mkdirSync(mdEnumPath, { recursive: true })
}

if (!fs.existsSync(yamlEnumPath)) {
    fs.mkdirSync(yamlEnumPath, { recursive: true })
}

// Process API Classes
const yamlFiles = fs.readdirSync(yamlAPIPath).filter(file => file.endsWith('.yaml'));

for (const yamlFile of yamlFiles) {
    const yamlPath = path.join(yamlAPIPath, yamlFile)
    const yamlContent = fs.readFileSync(yamlPath, "utf-8")

    const c = yaml.parse(yamlContent);
    const className = path.basename(yamlFile, '.yaml')
    let mdPath = path.join(mdAPIPath, className + ".md")
    let mk = ""
    const iconPath = path.join(iconDataPath, c.Name + ".svg")
    const emojiExists = fs.existsSync(iconPath)

    function appendLine(str) {
        mk += str + "\n"
    }

    appendLine("---")
    appendLine("title: " + c.Name)
    appendLine("description:")
    if (emojiExists) {
        appendLine("icon: polytoria/" + c.Name)
    } else {
        appendLine("icon: polytoria/Unknown")
    }
    appendLine("---")
    appendLine("")
    if (emojiExists) {
        appendLine(`# :polytoria-${c.Name}: ` + c.Name)
    } else {
        appendLine("# " + c.Name)
    }

    if (c.BaseType) {
        appendLine("")
        appendLine(`{{ inherits("${c.BaseType}") }}`)
    }

    appendLine("")
    appendLine(c.Description)
    appendLine("")

    if (c.IsStatic) {
        appendLine(`{{ staticclass(${c.Name.replace("Service", "")}) }}`)
        appendLine("")
    }

    if (c.IsAbstract) {
        appendLine("{{ abstract() }}")
        appendLine("")
    }

    if (!c.IsInstantiatable) {
        appendLine("{{ notnewable() }}")
        appendLine("")
    }

    const properties = c.Properties ? (Array.isArray(c.Properties) ? c.Properties : [c.Properties]) : [];

    if (properties.length > 0) {
        appendLine("")
        appendLine("## Properties")
        appendLine("")
    }

    for (const prop of properties) {
        appendLine(`### ${prop.Name}:${prop.Type} { property }`)
        appendLine(``)
        appendLine(prop.Description || "Missing documentation!")
        appendLine(``)
    }

    const methods = c.Methods ? (Array.isArray(c.Methods) ? c.Methods : [c.Methods]) : [];

    if (methods.length > 0) {
        appendLine("")
        appendLine("## Methods")
        appendLine("")
    }
    for (const m of methods) {
        if (m.IsObsolete) continue
        let params = []

        const parameters = m.Parameters ? (Array.isArray(m.Parameters) ? m.Parameters : [m.Parameters]) : [];
        for (const p of parameters) {
            params.push(`${p.Name};${p.Type}${p.IsOptional ? "?" : ""}`)
        }

        appendLine(`### ${m.Name}(${params.join(",")}):${m.ReturnType || "void"} { method }`)
        appendLine(``)
        appendLine(m.Description || "Missing documentation!")
        appendLine(``)
    }

    const events = c.Events ? (Array.isArray(c.Events) ? c.Events : [c.Events]) : [];

    if (events.length > 0) {
        appendLine("")
        appendLine("## Events")
        appendLine("")
    }

    for (const e of events) {
        let args = []

        const aargs = e.Arguments ? (Array.isArray(e.Arguments) ? e.Arguments : [e.Arguments]) : [];
        for (const arg of aargs) {
            args.push(`${arg.Name};${arg.Type}`)
        }

        appendLine(`### ${e.Name}(${args.join(",")}) { event }`)
        appendLine(``)
        appendLine(e.Description || "")
        appendLine(``)
    }

    fs.writeFileSync(mdPath, mk)
}

console.log(`Converted ${yamlFiles.length} XML files to Markdown`)

// Process Enums
const yamlEnumFiles = fs.readdirSync(yamlEnumPath).filter(file => file.endsWith('.yaml'));

for (const yamlFile of yamlEnumFiles) {
    const yamlPath = path.join(yamlEnumPath, yamlFile);
    const yamlContent = fs.readFileSync(yamlPath, "utf-8");

    const e = yaml.parse(yamlContent);
    const enumName = path.basename(yamlFile, '.yaml');
    let mdPath = path.join(mdEnumPath, enumName + ".md")
    let mk = ""

    function appendLine(str) {
        mk += str + "\n"
    }

    appendLine("---")
    appendLine("title: " + e.Name)
    appendLine("description: " + (e.Description && e.Description !== "Missing Documentation" ? e.Description : ""))
    appendLine("icon: polytoria/Enum")
    appendLine("---")
    appendLine("")
    appendLine("# " + e.Name)
    appendLine("")

    if (e.Description && e.Description !== "Missing Documentation") {
        appendLine(e.Description)
        appendLine("")
    }

    appendLine("| Name | Description |")
    appendLine("| --- | --- |")

    const options = e.Options ? (Array.isArray(e.Options) ? e.Options : [e.Options]) : [];
    for (const option of options) {
        const optionName = typeof option === 'string' ? option : option.Name;
        const optionDesc = typeof option === 'string' ? "" : (option.Description || "");
        const displayDesc = optionDesc === "Missing Documentation" ? "" : optionDesc;
        appendLine(`| \`${e.Name}.${optionName}\` | ${displayDesc} |`)
    }

    fs.writeFileSync(mdPath, mk)
}

console.log(`Converted ${yamlEnumFiles.length} enum XML files to Markdown`)