---
title: ModuleScript
description:
icon: polytoria/ModuleScript
---

# :polytoria-ModuleScript: ModuleScript

{{ inherits("Script") }}

ModuleScripts are specialized scripts to hold data that can be accessed by other scripts using the require() function. It is important to define and return a table in a ModuleScript. When the place starts, the server and the client will run the ModuleScript once and store the result for other scripts to retrieve with require().

