---
title: Lighting
description:
icon: polytoria/Lighting
---

# :polytoria-Lighting: Lighting

{{ inherits("Instance") }}

Lighting is responsible for controlling the state of the lighting in the place. It provides many different options for creators to enhance and fine-tune the visuals of their worlds.


{{ staticclass("Lighting") }}

{{ notnewable() }}


## Properties

### Skybox:SkyboxEnum { property }

Sets the skybox to one of the preset skyboxes.

---
### AmbientSource:AmbientSourceEnum { property }

Determines the source of ambient lighting in the place.

---
### AmbientColor:Color { property }

Sets the ambient color of the lighting in the place.

---
### FogEnabled:boolean { property }

Enables or disables fog in the place.

---
### FogColor:Color { property }

Sets the color of the fog in the place.

---
### FogStartDistance:number { property }

Sets the distance from the camera at which fog begins to appear.

---
### FogEndDistance:number { property }

Sets the distance from the camera at which fog stops appearing.

