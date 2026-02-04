const fs = require("fs")
const path = require("path")
const yaml = require("yaml")

// Constants
const YAML_API_PATH = path.join(__dirname, "../", "yaml", "types")
const YAML_ENUM_PATH = path.join(__dirname, "../", "yaml", "enums")
const FLAGS = ['ServerExclusive', 'NoSync', 'NoNetwork']

function ensureDirectoryExists(dirPath) {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true })
    }
}

function loadYamlFile(filePath) {
    if (!fs.existsSync(filePath)) {
        return null
    }
    const content = fs.readFileSync(filePath, "utf-8")
    return yaml.parse(content)
}

function saveYamlFile(filePath, data) {
    fs.writeFileSync(filePath, yaml.stringify(data))
}

function cleanupObsoleteFiles(dirPath, currentItems, itemType) {
    if (!fs.existsSync(dirPath)) return

    const existingFiles = fs.readdirSync(dirPath)
    for (const file of existingFiles) {
        if (!file.endsWith('.yaml')) continue

        const itemName = path.basename(file, '.yaml')
        if (!currentItems.has(itemName)) {
            fs.unlinkSync(path.join(dirPath, file))
            console.log(`Removed obsolete ${itemType}: ${itemName}`)
        }
    }
}

function extractFlags(item) {
    const flags = {}
    FLAGS.forEach(flag => {
        if (item[flag] !== undefined) {
            flags[flag] = item[flag]
        }
    })
    return flags
}

function applyFlags(target, flags) {
    FLAGS.forEach(flag => {
        if (flags[flag] !== undefined) {
            target[flag] = flags[flag]
        }
    })
}

function buildLookupMap(items, extractFn) {
    const map = {}
    const itemsArray = Array.isArray(items) ? items : [items]

    itemsArray.forEach(item => {
        if (item.Name) {
            map[item.Name] = extractFn(item)
        }
    })

    return map
}

function loadExistingClassData(filePath) {
    const existingData = loadYamlFile(filePath)

    if (!existingData) {
        return {
            description: "Missing Documentation",
            flags: {},
            properties: {},
            methods: {},
            events: {}
        }
    }

    return {
        description: existingData.Description || "Missing Documentation",
        flags: extractFlags(existingData),
        properties: buildLookupMap(existingData.Properties || [], prop => ({
            description: prop.Description || "",
            flags: extractFlags(prop)
        })),
        methods: buildLookupMap(existingData.Methods || [], method => ({
            description: method.Description || "",
            flags: extractFlags(method)
        })),
        events: buildLookupMap(existingData.Events || [], event => ({
            description: event.Description || "",
            arguments: event.Arguments || "",
            flags: extractFlags(event)
        }))
    }
}

function processProperty(prop, existingData) {
    const existing = existingData.properties[prop.Name] || {}
    const propObj = {
        ...prop,
        Description: existing.description || "Missing Documentation"
    }
    applyFlags(propObj, existing.flags || {})
    return propObj
}

function processMethod(method, existingData) {
    const existing = existingData.methods[method.Name] || {}
    const methodObj = {
        ...method,
        Description: existing.description || "Missing Documentation"
    }
    applyFlags(methodObj, existing.flags || {})
    return methodObj
}

function processEvent(event, existingData) {
    const existing = existingData.events[event.Name] || {}
    const eventObj = {
        ...event,
        Description: existing.description || "Missing Documentation",
        Arguments: existing.arguments || ""
    }
    applyFlags(eventObj, existing.flags || {})
    return eventObj
}

function processClass(classData) {
    const yamlPath = path.join(YAML_API_PATH, classData.Name + ".yaml")
    const existingData = loadExistingClassData(yamlPath)

    const obj = {
        ...classData,
        Description: existingData.description,
        Properties: [],
        Methods: [],
        Events: []
    }

    // Apply root-level flags
    applyFlags(obj, existingData.flags)

    // Process properties
    for (const prop of classData.Properties) {
        if (prop.IsObsolete) continue
        obj.Properties.push(processProperty(prop, existingData))
    }

    // Process methods
    for (const method of classData.Methods) {
        if (method.IsObsolete) continue
        if (method.Name.startsWith("__")) continue // Ignore metamethods
        obj.Methods.push(processMethod(method, existingData))
    }

    // Process events
    for (const event of classData.Events) {
        obj.Events.push(processEvent(event, existingData))
    }

    saveYamlFile(yamlPath, obj)
}

function loadExistingEnumData(filePath) {
    const existingData = loadYamlFile(filePath)

    if (!existingData) {
        return {
            description: "",
            options: {}
        }
    }

    return {
        description: existingData.Description || "",
        options: buildLookupMap(existingData.Options || [], option => ({
            description: option.Description || ""
        }))
    }
}

function processEnum(enumData) {
    const yamlPath = path.join(YAML_ENUM_PATH, enumData.Name + ".yaml")
    const existingData = loadExistingEnumData(yamlPath)

    const obj = {
        ...enumData,
        Description: existingData.description,
        Options: []
    }

    // Process options
    for (const option of enumData.Options) {
        const existing = existingData.options[option] || {}
        obj.Options.push({
            Name: option,
            Description: existing.description || ""
        })
    }

    saveYamlFile(yamlPath, obj)
}

function main() {
    // Ensure directories exist
    ensureDirectoryExists(YAML_API_PATH)
    ensureDirectoryExists(YAML_ENUM_PATH)

    // Load source data
    const data = JSON.parse(fs.readFileSync("def.json", "utf-8"))

    // Track current items
    const currentClasses = new Set(data.Classes.map(c => c.Name))
    const currentEnums = new Set(data.Enums.map(e => e.Name))

    // Clean up obsolete files
    cleanupObsoleteFiles(YAML_API_PATH, currentClasses, "class")
    cleanupObsoleteFiles(YAML_ENUM_PATH, currentEnums, "enum")

    // Process all classes
    data.Classes.forEach(processClass)

    // Process all enums
    data.Enums.forEach(processEnum)
}

main()