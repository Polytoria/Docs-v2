---
title: InsertService
description:
icon: polytoria/InsertService
---

# :polytoria-InsertService: InsertService

{{ inherits("Instance") }}

Insert is a class used for inserting user-generated models into your game via scripts.


{{ staticclass("Insert") }}

{{ serverexclusive() }}

{{ notnewable() }}


## Methods

### ModelAsync(id;number):Instance { method }

Inserts a model with the specified ID.

---
### AccessoryAsync(id;number):Accessory { method }

Inserts an accessory with the specified ID.

---
### ToolAsync(id;number):Tool { method }

Insert a new tool with the specified ID

