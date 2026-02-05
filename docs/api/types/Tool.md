---
title: Tool
description:
icon: polytoria/Tool
---

# :polytoria-Tool: Tool

{{ inherits("PhysicalModel") }}

Tools are objects that can be held by the player.


## Properties

### Droppable:boolean { property }

Determines whether the tool can be dropped by the player.

---
### IconImage:ImageAsset { property }

The icon for this tool, appears in inventory.

---
### Holder:NPC { property }

Determines who is currently holding this tool.

---

## Methods

### Activate():nil { method }

Activates the tool, similarly to pressing the mouse button.

---
### Deactivate():nil { method }

Deactivates the tool, similarly to releasing the mouse button.

---
### PlayAnimation(animationName;string):nil { method }

Plays the specified animation on the holder of the tool.

---

## Events

### Equipped() { event }

Fires when this tool has been equipped

---
### Unequipped() { event }

Fires when this tool has been unequipped

---
### Activated() { event }

Fires when this tool has been activated (via mouse press or `Tool:Activate`)

---
### Deactivated() { event }

Fires when this tool has been deactivated (via mouse release or `Tool:Deactivate`)

