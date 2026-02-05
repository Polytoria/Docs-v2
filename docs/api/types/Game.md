---
title: Game
description:
icon: polytoria/Game
---

# :polytoria-Game: Game

{{ inherits("Instance") }}

Game is the root object in the Polytoria instance tree. It is the object from which everything is descended.


{{ staticclass("game") }}

{{ notnewable() }}


## Properties

### IsLocalTest:boolean { property }

Returns true if this current session is being tested locally
{{ readonly() }}


---
### GameID:number { property }

The ID of the current Polytoria place.
{{ readonly() }}


---
### ServerID:number { property }

The server ID of the current instance.
{{ readonly() }}


---
### UpTime:number { property }

The uptime of this game in seconds.
{{ readonly() }}


---
### ServerTime:number { property }

A synchronized clock that represents the server's current time.
{{ readonly() }}


---
### InstanceCount:number { property }

The total number of instances currently loaded.
{{ readonly() }}


---

## Events

### Ready() { event }

Fires when the game is ready

---
### Rendered(delta;number) { event }

Fires every frame after the place has been rendered. The `delta` parameter is the time between the last frame and the current.

