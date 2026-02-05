---
title: Script
description:
icon: polytoria/Script
---

# :polytoria-Script: Script

{{ inherits("Instance") }}

Scripts are abstract base classes representing Lua code that can be executed in the game.

{{ abstract() }}

{{ notnewable() }}


## Properties

### Source:string { property }

The source code of the script as a string.

---
### IsEnabled:boolean { property }

Determine if this script should be enabled. Note that setting it to false during runtime won't stop the script immediately, rather it would stop any running threads when it hits any yield function.

---
### LinkedScript:FileLinkAsset { property }

A linked script asset associated with this script.

---
### Compatibility:boolean { property }

Indicates whether the script is running in compatibility mode.

---

## Methods

### Call(funcName;string,args;any):nil { method }

Calls a function in the script with the given arguments.

---
### CallAsync(funcName;string,args;any):nil { method }

Calls a function in the script asynchronously with the given arguments.

---
### LinkWithScriptFile(scriptPath;string):nil { method }

Link script with the target file path

