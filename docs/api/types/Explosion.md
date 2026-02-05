---
title: Explosion
description:
icon: polytoria/Explosion
---

# :polytoria-Explosion: Explosion

{{ inherits("Dynamic") }}

Explosion is a deadly explosion killing players and applying force to parts at the given position.


## Properties

### Radius:number { property }

Determines the radius of this explosion

---
### Force:number { property }

Determines the force of this explosion that will be applied to affected hits

---
### AffectAnchored:boolean { property }

Determines if this explosion should affect anchored parts or not

---
### Damage:number { property }

Damage that is affected to player

---
### AffectPredicate:function { property }

A predicate function deciding whenever this part should be accepted or not
    
Example usage:
```lua
explosion.AffectPredicate = function(hit)
  -- always explode
  return true
end
```

---

## Events

### Touched(hit;Instance) { event }

Fires when this explosion affects a hit

