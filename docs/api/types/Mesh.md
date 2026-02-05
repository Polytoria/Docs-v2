---
title: Mesh
description:
icon: polytoria/Mesh
---

# :polytoria-Mesh: Mesh

{{ inherits("Entity") }}

Represents a part that can have custom mesh applied to it, the mesh may be from the Polytoria Store (Hats, Tools and Heads) or user-uploaded meshes.


## Properties

### Asset:MeshAsset { property }

The mesh asset used by this Mesh.

---
### IncludeOffset:boolean { property }

Whether to keep the offset of the mesh or recenter it.

---
### CollisionType:CollisionTypeEnum { property }

The type of collision shape to apply to the mesh.

---
### PlayAnimationOnStart:boolean { property }

Whether to play the mesh's animation automatically when the mesh is loaded.

---
### UsePartColor:boolean { property }

Whether to use the color of the part this mesh is attached to.

---
### Color:Color { property }

The color of the mesh.

---
### CastShadows:boolean { property }

Whether the mesh casts shadows.

---
### CurrentAnimation:string { property }

Indicates the name of the current animation playing on the mesh.
{{ readonly() }}


---
### IsAnimationPlaying:boolean { property }

Indicates whether an animation is currently playing on the mesh.
{{ readonly() }}


---
### Loading:boolean { property }

Indicates whether this mesh is currently being loaded.
{{ readonly() }}


---

## Methods

### PlayAnimation(animationName;string,speed;number?,loop;boolean?):nil { method }

Plays the specified animation on the mesh.

---
### StopAnimation(animationName;string?):nil { method }

Stops the specified animation on the mesh.

---
### GetAnimations():{ string } { method }

Gets a list of all animations available on the mesh.

---
### GetAnimationInfo():{ MeshAnimationInfo } { method }

Get the animation info

---

## Events

### Loaded() { event }

Fires when this mesh has been loaded.

