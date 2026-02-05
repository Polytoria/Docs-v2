---
title: AddonObject
description:
icon: polytoria/Unknown
---

# AddonObject

AddonObject represents an addon in the creator. This object serves as the main interface for addon developers to interact with the addon system.

{{ notnewable() }}


## Properties

### Identifier:string { property }

The identifier for this addon.
{{ readonly() }}


---
### AddonName:string { property }

The display name of the addon. This name will appear in the tools menu.

---
### AddonIcon:PTImageAsset { property }

Determines the addon icon.

---

## Methods

### RequestPermissions(perms;{ AddonPermissionEnum }):nil { method }

Prompt the user to request for permissions

---
### CreateToolItem(txt;string):AddonToolItem { method }

Create a new tool item with text.

---

## Events

### CleanupReceived() { event }

Fires when cleanup has been requested by the creator, this is usually fired when updating the addon.

