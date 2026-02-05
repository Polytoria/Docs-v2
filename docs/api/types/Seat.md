---
title: Seat
description:
icon: polytoria/Seat
---

# :polytoria-Seat: Seat

{{ inherits("Part") }}

Seats are parts the player can sit on.


## Properties

### Occupant:NPC { property }

Indicates who is currently occupying the seat.

---
### CanNPCSit:boolean { property }

Determines whether NPCs are allowed to sit on this seat or only players.

---

## Events

### Sat(occupant;NPC) { event }

Fires when an occupant sits on the seat.

---
### Vacated(occupant;NPC) { event }

Fires when an occupant leaves the seat.

