---
title: CreatorSelections
description:
icon: polytoria/CreatorSelections
---

# :polytoria-CreatorSelections: CreatorSelections

{{ inherits("Instance") }}

CreatorSelections is an object that manages selections in the game instance. This class is only available in the creator.


{{ staticclass("Selections") }}

{{ notnewable() }}


## Methods

### Select(instance;Instance):nil { method }

Select a instance

---
### SelectChild(instance;Instance):nil { method }

Select all children of the instance

---
### GetSelected():{ Instance } { method }

Get all selected instances

---
### Deselect(instance;Instance):nil { method }

Deselect the instance

---
### SelectOnly(instance;Instance):nil { method }

Deselect all, then select the instance

---
### DeselectAll():nil { method }

Deselect all instances

---
### HasSelected(instance;Instance):boolean { method }

Check if instance has been selected

---

## Events

### Selected() { event }

Fires when an instance has been selected

---
### Deselected() { event }

Fires when an instance has been deselected

