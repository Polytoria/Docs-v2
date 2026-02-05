---
title: IOService
description:
icon: polytoria/Unknown
---

# IOService

{{ inherits("Instance") }}

Class for interacting with IO in project, only usable with scripts with the respective permission.


{{ staticclass("IO") }}

{{ notnewable() }}


## Methods

### ReadBytesFromPath(path;string):buffer { method }

Read the buffer file from path

---
### ReadTextFromPath(path;string):string { method }

Read the text file data from path

---
### WriteBytesToPath(path;string,bytes;buffer):nil { method }

Write buffer data to file in the project

---
### WriteTextToPath(path;string,txt;string):nil { method }

Write the text file data to path

---
### ListProjectFiles():{ string } { method }

List all files in the project

---
### ReadBytesFromID(id;string):buffer { method }

Read the file data from linked ID

---
### GetPathFromID(indexID;string):string { method }

Get the file path from linked ID

