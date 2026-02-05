---
title: CaptureService
description:
icon: polytoria/CaptureService
---

# :polytoria-CaptureService: CaptureService

{{ inherits("Instance") }}

Service for capturing photos


{{ staticclass("Capture") }}

{{ notnewable() }}


## Properties

### OnCooldown:boolean { property }

Returns whenever the capture is on cooldown.
{{ readonly() }}


---
### CanCapture:boolean { property }

Determines if user/scripts can take a picture.

---
### DefaultCaptureOverlay:UIField { property }

Default capture overlay for all captures

---
### SpectatorAttach:Dynamic { property }

Attaches a spectator camera at dynamic for use with spectator mode.

---

## Methods

### TakePhotoAtDynamic(dyn;Dynamic,photoSize;Vector2?,overlay;UIField?):nil { method }

Take a photo at dynamic

---
### TakePhotoAt(pos;Vector3,rot;Vector3,photoSize;Vector2?,overlay;UIField?):nil { method }

Take photo at `pos` for position and `rot` for rotation, optional `photoSize` defines the size, and optional UI `overlay` can be passed to include it in the result photo.

