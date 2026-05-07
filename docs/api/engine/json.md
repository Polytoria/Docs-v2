---
title: json
description:
icon: polytoria/json
---

# :polytoria-json: json

{{ inherits("Instance") }}

json is a module which allows for scripts to interface with JSON data representation by converting it to a table and vice versa.

{{ staticclass() }}

{{ notnewable() }}

## Methods

### serialize(value;any):string { method }

Converts a Luau table into a JSON string.

### parse(raw;string?):any { method }

Parses a JSON string back into a Luau table.

### null():string { method }

Creates a JSON null value for use in serialization.
