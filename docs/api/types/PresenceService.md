---
title: PresenceService
description:
icon: polytoria/PresenceService
---

# :polytoria-PresenceService: PresenceService

{{ inherits("Instance") }}

PresenceService is a service that allows local scripts to set the active status of the player. Which will be used to display in supported integrations.


{{ staticclass("Presence") }}

{{ clientexclusive() }}

{{ notnewable() }}


## Properties

### State:string { property }

Current activity status.

---
### CoverImage:PTImageAsset { property }

Activity cover image.

---

## Methods

### ResetTimer():nil { method }

Reset the running timer for this activity.

