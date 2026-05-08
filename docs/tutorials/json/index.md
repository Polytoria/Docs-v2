---
title: How to use json
description: Tutorial on how to use json.
weight: -2
---

# How to use json

The `json` library converts Luau tables to JSON strings and back. You will mostly use two functions: `json.serialize` to turn a table into a string, and `json.parse` to turn a string back into a table.

## Serializing tables

Pass a table to `json.serialize` and you get a JSON string back.

```lua
local player = {
    name  = "Polytoria",
    score = 1500,
    alive = true,
}

local encoded = json.serialize(player)
print(encoded)
-- {"alive":true,"name":"Polytoria","score":1500}
```

## Parsing strings

`json.parse` goes the other direction. Here is the same player table serialized and parsed back:

```lua
local player = {
    name  = "Polytoria",
    score = 1500,
    alive = true,
}

local encoded = json.serialize(player)
local data = json.parse(encoded)

print(data.name)   -- Polytoria
print(data.score)  -- 1500
print(data.alive)  -- true
```

## Nested data

Nested tables and arrays.

```lua
local character = {
    name      = "Polytoria",
    stats     = {
        health = 100,
        mana   = 80,
        speed  = 16,
    },
    inventory = { "sword", "potion", "map" },
}

local encoded = json.serialize(character)

local back = json.parse(encoded)
print(back.stats.health)   -- 100
print(back.inventory[1])   -- sword
```