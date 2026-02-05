---
title: PolytorianModel
description:
icon: polytoria/PolytorianModel
---

# :polytoria-PolytorianModel: PolytorianModel

{{ inherits("CharacterModel") }}

PolytorianModel is a CharacterModel that represent default Polytoria Character.


## Properties

### HeadColor:Color { property }

The head color

---
### TorsoColor:Color { property }

The torso color

---
### LeftArmColor:Color { property }

The left arm color

---
### RightArmColor:Color { property }

The right arm color

---
### LeftLegColor:Color { property }

The left leg color

---
### RightLegColor:Color { property }

The right leg color

---
### FaceImage:ImageAsset { property }

The face image to use

---
### ShirtImage:ImageAsset { property }

The shirt image to use

---
### PantsImage:ImageAsset { property }

The pants image to use

---
### TorsoMesh:MeshAsset { property }

The torso mesh to use

---
### Ragdolling:boolean { property }

Returns true if this character is ragdolling
{{ readonly() }}


---
### RagdollPosition:Vector3 { property }

Returns the current global ragdoll position, if ragdoll haven't starts yet. Returns `Vector3.Zero`
{{ readonly() }}


---
### RagdollRotation:Vector3 { property }

Returns the current global ragdoll rotation, if ragdoll haven't starts yet. Returns `Vector3.Zero`
{{ readonly() }}


---

## Methods

### StartRagdoll(force;Vector3?):nil { method }

Start ragdoll

---
### StopRagdoll():nil { method }

Stop ragdoll

---
### GetAttachment(attachmentEnum;CharacterAttachmentEnum):Dynamic { method }

Get an attachment from this character.

---
### LoadAppearance(userID;number,loadTool;boolean?):nil { method }

Load an appearance.

---
### ClearAppearance():nil { method }

Clear current appearance.

---
### SetBoneOverrideTo(attachment;CharacterAttachmentEnum,to;boolean):nil { method }

EXPERIMENTAL !! Set bone override mode

---
### SetAnimationOverrideTo(to;boolean):nil { method }

EXPERIMENTAL !! Set animation override, if set to true. will disable the character animation entirely

---
### SetBoneOverridePosition(attachment;CharacterAttachmentEnum,pos;Vector3):nil { method }

EXPERIMENTAL !! Set bone override position

---
### SetBoneOverrideRotation(attachment;CharacterAttachmentEnum,euler;Vector3):nil { method }

EXPERIMENTAL !! Set bone override rotation

---
### GetBoneOverridePosition(attachment;CharacterAttachmentEnum):Vector3 { method }

EXPERIMENTAL !! Get bone override position

---
### GetBoneOverrideRotation(attachment;CharacterAttachmentEnum):Vector3 { method }

EXPERIMENTAL !! Get bone override rotation

---

## Events

### RagdollStarted() { event }

Fires when ragdoll has been started

---
### RagdollStopped() { event }

Fires when ragdoll has been stopped

