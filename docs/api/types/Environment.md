---
title: Environment
description:
icon: polytoria/Environment
---

# :polytoria-Environment: Environment

{{ inherits("Instance") }}

Environment is the primary object intended for storing active objects in the place.


{{ staticclass("Environment") }}

{{ notnewable() }}


## Properties

### CurrentCamera:Camera { property }

Determines the current camera which player is using to view

---
### Gravity:Vector3 { property }

The direction and strength of gravity in the world.

---
### PartDestroyHeight:number { property }

The height at which unanchored parts are destroyed when they fall below it.

---
### AutoGenerateNavMesh:boolean { property }

Determines whether or not to automatically build a navigation mesh for NPC pathfinding. This property is disabled by default so there are no performance issues with larger maps.

---

## Methods

### Raycast(origin;Vector3,direction;Vector3,maxDistance;number?,ignoreList;{ Instance }?):RayResult { method }

Casts a ray from origin with a specified direction and returns a RayResult for the first hit object.

---
### RaycastAll(origin;Vector3,direction;Vector3,maxDistance;number?,ignoreList;{ Instance }?):{ RayResult } { method }

Casts a ray from origin with a specified direction and returns a RayResult array for all hit objects.

---
### OverlapSphere(origin;Vector3,radius;number,ignoreList;{ Instance }?):{ Instance } { method }

Returns a list of instances intersecting with the sphere in the given position and radius.

---
### OverlapBox(pos;Vector3,size;Vector3,rot;Vector3,ignoreList;{ Instance }?):{ Instance } { method }

Returns a list of instances intersecting with the box in the given position, size and rotation.

---
### RebuildNavMesh():nil { method }

Rebuilds the navigation mesh which determines the empty space where NPCs can pathfind in.

---
### GetPointOnNavMesh(toPoint;Vector3):Vector3 { method }

Returns a point on the navigation mesh at the given position.

