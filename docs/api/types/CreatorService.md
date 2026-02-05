---
title: CreatorService
description:
icon: polytoria/CreatorService
---

# :polytoria-CreatorService: CreatorService

CreatorService is the class that manages the creator. This class is only available in the creator.


{{ staticclass("Creator") }}

{{ notnewable() }}


## Properties

### Interface:CreatorInterface { property }

The interface
{{ readonly() }}


---
### CurrentGame:Game { property }

Current active game
{{ readonly() }}


---
### LocalTestActive:boolean { property }

Returns true if local test is active
{{ readonly() }}


---

## Events

### LocalTestStarted() { event }

Fires when local testing starts

---
### LocalTestStopped() { event }

Fires when local testing ends

