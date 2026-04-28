---
title: Saving Data with Datastores
description: Tutorial, Persist player progress.
weight: -5
---

# Saving Data with Datastores

Datastores let you save player progress, anything you want to save between play sessions.

## Getting a Datastore

Use the `Datastore` service to grab a datastore by name. Call `Disconnect()` only when your server or script is completely finished using the datastore (for example, on shutdown), not after every read or write.

```lua
local ds = Datastore:GetDatastore("PlayerCoins")
```

## Reading Data

`GetAsync` fetches a value. Wrap it in `pcall` because network requests can fail. Provide a default if there's no data yet:

```lua
local ds = Datastore:GetDatastore("PlayerCoins")

Players.PlayerAdded:Connect(function(player)
    local userKey = tostring(player.UserID)

    local success, coins = pcall(function()
        return ds:GetAsync(userKey)
    end)

    if success and coins ~= nil then
        print("Loaded " .. coins .. " coins")
    else
        print("No saved data, starting from 0")
        coins = 0
    end
end)
```

## Writing Data

`SetAsync` saves a value. Same deal — use `pcall`:

```lua
local ds = Datastore:GetDatastore("PlayerCoins")

Players.PlayerAdded:Connect(function(player)
    local userKey = tostring(player.UserID)
    local coins = 100

    local success = pcall(function()
        ds:SetAsync(userKey, coins)
    end)

    if success then
        print("Saved!")
    else
        print("Save failed!")
    end
end)
```

## Join and Leave Pattern

The standard setup is:
- `PlayerAdded` → load data
- `PlayerRemoved` → save data
- Store the value on an `IntValue` so other scripts can read it easily

**ServerScript** (in `ScriptService`):

```lua
local ds = Datastore:GetDatastore("PlayerCoins")

local function loadPlayer(player: Player)
    local key = tostring(player.UserID)
    local success, coins = pcall(function()
        return ds:GetAsync(key)
    end)

    local coinValue = Instance.New("IntValue", player)
    coinValue.Name = "Coins"
    coinValue.Value = success and coins or 0
end

local function savePlayer(player: Player)
    local key = tostring(player.UserID)
    local coins = player:WaitChild("Coins").Value

    pcall(function()
        ds:SetAsync(key, coins)
    end)
end

Players.PlayerAdded:Connect(loadPlayer)
Players.PlayerRemoved:Connect(savePlayer)
```

## Async and spawn

Datastore functions are async. If you need to load or save multiple things at once, use `spawn` to run them simultaneously:

```lua
spawn(function()
    local success, coins = pcall(function()
        return ds:GetAsync("Player1")
    end)
    if success then
        print("Player1 coins:", coins)
    end
end)

spawn(function()
    local success, coins = pcall(function()
        return ds:GetAsync("Player2")
    end)
    if success then
        print("Player2 coins:", coins)
    end
end)
```