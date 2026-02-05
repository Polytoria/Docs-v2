---
title: CreatorHistory
description:
icon: polytoria/CreatorHistory
---

# :polytoria-CreatorHistory: CreatorHistory

{{ inherits("Instance") }}

CreatorHistory is a class that manages history (undo-redo) of this game instance. This class is only available in the creator.


{{ staticclass("History") }}

{{ notnewable() }}


## Methods

### NewAction(title;string):nil { method }

Creates new action

---
### AddDoCallback(callback;function):nil { method }

Add do callback

---
### AddUndoCallback(callback;function):nil { method }

Add undo callback

---
### CommitAction():nil { method }

Commit the current action

