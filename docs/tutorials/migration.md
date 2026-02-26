---
title: Migrating to 2.0
description: Guide on how you can migrate your place to 2.0
---

!! WORK IN PROGRESS !!

# Migrating to 2.0

Tutorial on how to migrate to 2.0

## Lua 5.2 -> Luau

This is the biggest compatibility breaking change for 2.0. The transition from Lua 5.2 (MoonSharp) to Luau. One of the big changes is the now unavailable `goto` statements. Which you'll have to switch to the `continue` statement instead.

## Unique Names

Each instance should now have it's own unique name. This is by design and allows for faster lookups. If you want to identify objects with the same instance type, use tags.

## Capitalization

Functions including `_update` and `_fixedUpdate` have been capitalized. Use `_Update` and `_FixedUpdate`

Fields like `Vector3.new` `Vector3.x` have also been capitalized to `Vector3.New`, `Vector3.X`

## Enum Table

Enums should be accessed from the global `Enums` table, for example:

```lua
Enums.PartMaterial.Brick
```

## Tweening

Tweening has been revamped in 2.0. You should create a tween object first, then tween it from there. Example:

```lua
local part: Part = script.Parent
local origin = part.Position
local tw = Tween:NewTween()

print("Tween Start!")

tw:TweenVector3(origin, origin + Vector3.New(0, 10, 0), 10, function(val)
    part.Position = val
end)

tw.Finished:Wait()

print("Tween Finished!")
```

## Particles

Particles have been revamped in 2.0.

## Datastore retrieving

Datastore now no longer requires waiting for it to load first.

```lua
local ds = Datastore:GetDatastore("datastore1")
ds:SetAsync("coins", 11)
local coins: number = ds:GetAsync("coins")
print(coins)
```

You may notice that these functions now require the Async suffix, which brings us to:

## Async functions

Some functions will now be required to be async in non compatibility mode. These include, but are not limited to, HTTP requests, Datastore data retrieval, inserts via InsertSzervice, etc.

Example HTTP Request made with 2.0:

```lua
local success, res = pcall(function()  
	return Http:GetAsync("http://example.com/")
end)
print(success, res)
```

To run multiple tasks simultaneously, use `spawn`

```lua
spawn(function() 
	local success, res = pcall(function()  
		return Http:GetAsync("https://example.com")
	end)
	print(success, res)
end)

local ds = Datastore:GetDatastore("datastore1")
ds:SetAsync("coins", 11)
local coins: number = ds:GetAsync("coins")
print(coins)
```
