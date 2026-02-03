---
title: Migrating to 2.0
description: Guide on how you can migrate your place to 2.0
---

!! WORK IN PROGRESS !!

# Migrating to 2.0

Tutorial on how to migrate to 2.0

## Lua 5.2 -> Luau

This is the biggest compatibility breaking change for 2.0. The transition from Lua 5.2 (Moonsharp) to Luau. One of the large changes being the `goto` statement, wherein which you'll now have to alternatively use `continue`.

## Tweening

Tweening has been revamped in 2.0. You should create a tween object first, then tween it from there. Example:

```lua
local part: Part = script.Parent
local origin = part.Position
local tw = Tween:NewTween()
tw:SetDirection(Enums.TweenDirection.Out)
tw:SetTrans(Enums.TweenTransition.Quad)

print("Tween Start!")

tw:TweenVector3(origin, origin + Vector3.New(0, 10, 0), 10, function(val)
    part.Position = val
end)
tw:TweenNumber(0, 1, 10, function(val)
	print("Tween Progress: "..tostring(val))
end)

print("Starting Tween!")
tw:Play()

tw.Finished:Wait()

print("Tween Finished!")
```

This allows creators to make multiple tweens at once, allowing more control and 

## Particles

Particles has been revamped in 2.0, you will be required to manually restore any particle effects that you bring over from 1.0 projects. However, this revamp allows you to have much more control over your visual effects!

## Datastore retrieving

Datastores no longer include the event property "Loaded". As functions have become asynchronous, creators no longer need to manually yield for this event.

```lua
local ds = Datastore:GetDatastore("datastore1")
ds:SetAsync("coins", 11)
local coins: number = ds:GetAsync("coins")
print(coins)
```

You may notice that these functions now require the Async suffix, which brings us to:

## Async functions

Some functions will now be required to be asynchronous in non compatibility mode. Some examples of our functions that are asynchronous are: Http requests, Datastore data retrieving, and Insert via InsertService.

Example HTTP Request made with 2.0:

```lua
local success, res = pcall(function()  
	return Http:GetAsync("http://example.com/")
end)
print(success, res)
```

To run multiple tasks simultaneously, use luau's global serial multithreading function, `spawn`

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

This allows creators to use multiple asynchronous functions simultaneously, providing faster processing and easier handling.