---
title: Grabbable
description:
icon: polytoria/Grabbable
---

# :polytoria-Grabbable: Grabbable

{{ inherits("Instance") }}

Grabbable represents a object that can be dragged by user. It can be parented to Physical to give user ability to drag that object.


## Properties

### Force:number { property }

Determines the force used to drag this object.

---
### MaxRange:number { property }

Determines the max range that this object can be dragged.

---
### UseDragForce:boolean { property }

Determines if dragging this object should affect physics.

---
### PermissionMode:GrabbablePermissionModeEnum { property }

Determines the permission mode for this grabber

---
### Dragger:Player { property }

Returns the current dragger
{{ readonly() }}


---
### PermissionPredicate:function { property }

A predicate function deciding whenever this player can grab this object. `PermissionMode` must be set to `GrabbablePermissionMode.Scripted`

Example usage:
```lua
grabbable.PermissionMode = Enums.GrabbablePermissionMode.Scripted
grabbable.PermissionPredicate = function(player)
  return player.Name == "Player1"
end
```

---

## Events

### Grabbed(grabber;Player) { event }

Fires when this object has been grabbed

---
### Released() { event }

Fires when this object has been released

