---
title: Players
description:
icon: polytoria/Players
---

# :polytoria-Players: Players

{{ inherits("Instance") }}

Players is the container class for all Player instances.


{{ staticclass("Players") }}

{{ notnewable() }}


## Properties

### LocalPlayer:Player { property }

The player who is currently playing the game.
{{ readonly() }}


---
### PlayerCollisionEnabled:boolean { property }

Determines whether or not collisions between players are enabled.

---
### PlayersCount:number { property }

The number of players currently in the game.
{{ readonly() }}


---

## Methods

### GetPlayers():{ Player } { method }

Returns a table containing all the players currently in the game.

---
### GetPlayer(username;string):Player { method }

Returns the player with the specified username.

---
### GetPlayerByID(userID;number):Player { method }

Returns the player with the specified user ID.

---

## Events

### PlayerAdded(player;Player) { event }

Fires when player has connected

---
### PlayerRemoved(player;Player) { event }

Fires when player has disconnected

