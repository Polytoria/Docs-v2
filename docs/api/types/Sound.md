---
title: Sound
description:
icon: polytoria/Sound
---

# :polytoria-Sound: Sound

{{ inherits("Dynamic") }}

Sounds are objects that can be placed in the world and play audio.


## Properties

### Audio:AudioAsset { property }

The audio asset to be played by the sound.

---
### Volume:number { property }

The volume level of the sound.

---
### Pitch:number { property }

The pitch level of the sound.

---
### Autoplay:boolean { property }

Determines whether the sound should start playing automatically when loaded.

---
### Loop:boolean { property }

Determines whether the sound should loop when it reaches the end.

---
### PlayInWorld:boolean { property }

Determines whether the sound should be played in the 3D world space.

---
### Paused:boolean { property }

Determines whether the sound should be paused

---
### MaxDistance:number { property }

The maximum distance at which the sound can be heard.

---
### Time:number { property }

Indicates the current playback position of the sound in seconds.

---
### Playing:boolean { property }

Indicates whether the sound is currently playing.
{{ readonly() }}


---
### Loading:boolean { property }

Indicates whether the sound is currently loading.
{{ readonly() }}


---
### Length:number { property }

The total length of the sound in seconds.
{{ readonly() }}


---

## Methods

### Play():nil { method }

Starts playing the sound.

---
### PlayOneShot(volume;number?):nil { method }

Plays the sound once at the specified volume without affecting the current playback.

---
### Pause():nil { method }

Pause the sound if it is currently playing.

---
### Stop():nil { method }

Stops the sound if it is currently playing.

---

## Events

### Loaded() { event }

Fires when this sound has loaded

