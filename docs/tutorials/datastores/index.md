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
Players.PlayerAdded:Connect(function(player)
    local ds = Datastore:GetDatastore(tostring(player.UserID))

    local success, coins = pcall(function()
        return ds:GetAsync("Coins")
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
Players.PlayerAdded:Connect(function(player)
    local ds = Datastore:GetDatastore(tostring(player.UserID))
    local coins = 100

    local success = pcall(function()
        ds:SetAsync("Coins", coins)
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
local function loadPlayer(player: Player)
    local key = tostring(player.UserID)
    local ds = Datastore:GetDatastore(key)
    local success, coins = pcall(function()
        return ds:GetAsync("Coins")
    end)

    local coinValue = Instance.New("IntValue", player)
    coinValue.Name = "Coins"
    coinValue.Value = success and coins or 0
end

local function savePlayer(player: Player)
    local key = tostring(player.UserID)
    local coins = player:WaitChild("Coins").Value
    local ds = Datastore:GetDatastore(key)

    pcall(function()
        ds:SetAsync("Coins", coins)
    end)
end

Players.PlayerAdded:Connect(loadPlayer)
Players.PlayerRemoved:Connect(savePlayer)
```

## Async and spawn

Datastore functions are async. If you need to load or save multiple things at once, use `spawn` to run them simultaneously:

```lua
spawn(function()
    local ds = Datastore:GetDatastore("Player1")
    local success, coins = pcall(function()
        return ds:GetAsync("Coins")
    end)
    if success then
        print("Player1 coins:", coins)
    end
end)

spawn(function()
    local ds = Datastore:GetDatastore("Player2")
    local success, coins = pcall(function()
        return ds:GetAsync("Coins")
    end)
    if success then
        print("Player2 coins:", coins)
    end
end)
```