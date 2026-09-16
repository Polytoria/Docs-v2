import os
import re


def getClassLink(className: str):
    # Find the actual link for the input classname by searching for the markdown file
    search_path = "docs/api/"

    search_name = className
    if className.endswith("Enum"):
        className = className[:-4]
        search_name = className

    for root, _, files in os.walk(search_path):
        for file in files:
            if file.endswith(".md") and file[:-3] == search_name:
                filePath = os.path.join(root, file)
                filePath = filePath[len(search_path):]
                filePath = filePath[:-3]
                return f"[`{className}`](/api/{filePath}/)"

def forceGetClassLink(className: str):
    return getClassLink(className) or f"`{className}`"

WORD_REGEX = re.compile(r"(\w+)")
def getComplexLink(type: str):
    result = ""
    inSimple = False
    oddIter = False
    for chunk in WORD_REGEX.split(type):
        if chunk:
            link = getClassLink(chunk)
            if link:
                if inSimple:
                    inSimple = False
                    result += "`"
                result += link
            else:
                if not inSimple:
                    inSimple = True
                    result += "`"
                result += chunk
        oddIter = not oddIter
    return result + "`" if inSimple else result

def getDirectory(category: str):
    # Find the actual link for the input classname by searching for the markdown file
    search_path = "docs/objects/" + category
    if category == "removed":
        search_path = "docs/removed"

    results: list[str] = []
    for _, _, files in os.walk(search_path):
        for file in files:
            className = file[:-3]
            if file.endswith(".md") and className != "index":
                if category == "enums":
                    results.append(f"[Enum]({className})")
                else:
                    results.append(f"[{className}]({className})")
    results.sort()
    return results

def formatParam(param: str):
    parts = param.split(";")
    namePart = parts[0]
    typePart = getComplexLink(parts[1])
    return f"{namePart} [ {typePart} ]" if namePart else typePart

def generateParamsQuote(params: str):
    if not params:
        return ""

    paramsList = params.split(",")
    if len(paramsList) == 1:
        return "!!! quote \"**Parameters:** <span style=\"font-weight: normal;\">" + formatParam(paramsList[0]) + "</span>\""

    return "???+ quote \"Parameters\"\n    " + "\n\n    ".join(map(formatParam, paramsList))

"Define macros"
def define_env(env):


    """
    Used to generate the "Inherited from" links in the documentation.
    This runs custom logic to find the correct link for a given class name,
    as the class name is not always equivalent to the markdown file's path.

    This assumes that the class is correctly placed in the docs/objects/ folder.
    """
    @env.macro
    def inherits(className):
        return f"Inherits {forceGetClassLink(className)}\n{{ data-search-exclude }}"

    @env.macro
    def inherited_by(classNames: list[str]):
        links = ", ".join(forceGetClassLink(name) for name in classNames)
        return f"Inherited by {links}\n{{ data-search-exclude }}"

    @env.macro
    def directory(category):
        return '\n'.join(["- " + item for item in getDirectory(category)])

    @env.macro
    def directorySort(categories: list[str]):
        text = ""
        for categoryName in categories:
            categoryText = ""
            category = getDirectory(categoryName)
            categoryName = categoryName[0].upper() + categoryName[1:]
            if categoryName == "Ui":
                categoryName = "UI"
            elif categoryName == "Static-classes":
                categoryName = "Static Classes"

            for v in category:
                categoryText += "- " + v + "\n"
            categoryText = "## " + categoryName + "\n" + categoryText + "\n---"
            text += "\n" + categoryText
        return text

    @env.macro
    def ambiguous(className, description):
        return f"!!! note \"Not to be confused with {forceGetClassLink(className)}, {description}\""

    # Classes is an array of pairs of class names and descriptions
    @env.macro
    def ambiguousMultiple(classes):
        text = "!!! note \"Not to be confused with:\""
        for i in range(len(classes)):
            text += f"\n    - {forceGetClassLink(classes[i][0])} ({classes[i][1]})\n"
        return text





    @env.macro
    def notnewable():
        return """<div data-search-exclude markdown>

!!! warning "Not newable"
    This object cannot be created by scripts using `Instance.New()`.

    </div>"""

    @env.macro
    def abstract():
        return """<div data-search-exclude markdown>
!!! danger "Abstract Object"
    This object exists only to serve as a foundation for other objects. It cannot be accessed directly, but its properties are documented below.

    Additionally, it cannot be created in the creator menu or with `Instance.New()`.
</div>"""

    @env.macro
    def service():
        return """<div data-search-exclude markdown>
!!! example "Service Object"
    This object is automatically created by Polytoria. Additionally, scripts cannot change its parent.
</div>"""

    @env.macro
    def staticclass(className = ""):
        if className != "":
            return f"""<div data-search-exclude markdown>
!!! tip "Static Class"
    This object is a static class. It can be accessed like this: `{className}`.

    Additionally, it cannot be created in the creator menu or with `Instance.New()`.
</div>"""
        else:
            return """<div data-search-exclude markdown>
!!! tip "Static Class"
    This object is a static class.

    Additionally, it cannot be created in the creator menu or with `Instance.New()`.
</div>"""

    @env.macro
    def serverexclusive():
        return "!!! warning \"This is only available to the server. It can only be accessed within server scripts.\""

    @env.macro
    def clientexclusive():
        return "!!! warning \"This is only available to the client. It can only be accessed within local scripts.\""

    @env.macro
    def nosync():
        return f"""<div data-search-exclude markdown>
!!! failure "Does not sync!"
    This object does not sync across the server and client. It is recommended to avoid changing its properties from {forceGetClassLink("Script")}s, as the changes will not be visible to players.
</div>"""

    @env.macro
    def readonly():
        return "!!! warning \"This property is read-only and cannot be modified.\""

    @env.macro
    def comingsoon():
        return "!!! failure \"This currently does not exist but has been promised by Polytoria developers.\""

    @env.macro
    def classLink(className):
        return forceGetClassLink(className)


    """
    !!! NOT SAFE FOR PRODUCTION USE !!!
    """
    @env.macro
    def doc_env():
        "Document the environment"
        return {name:getattr(env, name) for name in dir(env) if not name.startswith('_')}

# "name:type[=defaultValue]"
PROPERTY_REGEX = re.compile(r"(\w+):([^=]+)(?:=(.+))?")
def property(line):
    match = PROPERTY_REGEX.match(line, 4)
    if not match:
        return f"### :polytoria-Property: {line[3:]}\n!!! bug \"Failed to parse line, fell back to raw.\""

    name, type, defaultValue = match.groups()

    typePart = forceGetClassLink(type.strip())
    if defaultValue:
        typePart += f" = {defaultValue}"

    return f"### :polytoria-Property: {name} : {typePart} {{ #{name} data-toc-label=\"{name}\" }}"

# "name(param;type,param;type ...)"
EVENT_REGEX = re.compile(r"(\w+)\((.*)\)")
def event(line):
    match = EVENT_REGEX.match(line, 4)
    if not match:
        return f"### <a href=\"../../scripting/PTSignal\">:polytoria-Event:</a> {line[3:]}\n!!! bug \"Failed to parse line, fell back to raw.\""

    name, paramsGroup = match.groups()

    return f"### <a href=\"../../scripting/PTSignal\">:polytoria-Event:</a> {name} {{ #{name} data-toc-label=\"{name}\" }}\n{generateParamsQuote(paramsGroup)}"

# "name(param;type,param;type ...):(type,type ...)"
METHOD_REGEX = re.compile(r"(\w+)\((.*)\):\((.*)\)")
def method(line: str):
    match = METHOD_REGEX.match(line, 4)
    if not match:
        return f"### :polytoria-Method: {line[3:]}\n!!! bug \"Failed to parse line, fell back to raw.\""

    name, paramsGroup, returnsGroup = match.groups()

    returnPart = "`()`"
    if returnsGroup:
        returns = returnsGroup.split(",")
        if len(returns) == 1:
            returnPart = getComplexLink(returns[0])
        else:
            returnPart = f"({", ".join(map(getComplexLink, returns))})"

    return f"### :polytoria-Method: {name} → {returnPart} {{ #{name} data-toc-label=\"{name}\" }}\n{generateParamsQuote(paramsGroup)}"

def on_pre_page_macros(env):
    # find headers with { macroName } at the end and replace with the associated macro
    markdownText = env.markdown
    lines = markdownText.split("\n")
    for i in range(len(lines)):
        if lines[i].endswith("{ property }"):
            lines[i] = property(lines[i][:-len("{ property }")])
        elif lines[i].endswith("{ event }"):
            lines[i] = event(lines[i][:-len("{ event }")])
        elif lines[i].endswith("{ method }"):
            lines[i] = method(lines[i][:-len("{ method }")])
    markdownText = "\n".join(lines)
    env.markdown = markdownText