---
title: Particles
description:
icon: polytoria/Particles
---

# :polytoria-Particles: Particles

{{ inherits("Dynamic") }}

Particles represents a particle system that can be used to create various visual effects.


## Properties

### Playing:boolean { property }

Determines if particles should be emitting.

---
### Image:ImageAsset { property }

The image used for the particles.

---
### Color:ColorSeries { property }

The color gradient used for the particles.

---
### Lifetime:NumberRange { property }

Determines the lifetime of a particle.

---
### Amount:number { property }

Determines the number of particles emitted.

---
### Gravity:Vector3 { property }

Determines the gravity effect applied to the particles.

---
### VelocityDirection:Vector3 { property }

Determines the velocity direction

---
### InitialVelocity:NumberRange { property }

Determines the initial velocity

---
### Spread:number { property }

Determines the spread angle of the velocity

---
### Flatness:number { property }

Determines how flat the spread angle should be

---
### Scale:NumberRange { property }

Determine the initial scale range

---
### HueVariation:NumberRange { property }

Determine the hue variation

---
### BlendMode:BlendModeEnum { property }

Determines the blend mode of the particle.

---
### Shaded:boolean { property }

Determines whether the particles are shaded.

---
### EmissionShape:ParticleEmissionShapeEnum { property }

Determines the emission shape of this particle

---
### EmissionShapeScale:Vector3 { property }

Determines the emission shape's scale

---
### SimulationSpace:ParticleSimulationSpaceEnum { property }

Whether the particles are simulated in world or local space.

---

## Methods

### Play():nil { method }

Starts playing the particle system.

---
### Stop():nil { method }

Stops playing the particle system.

---
### Emit(count;number):nil { method }

Emits a specified number of particles immediately.

