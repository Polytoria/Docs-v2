---
title: PlacesService
description:
icon: polytoria/Unknown
---

# PlacesService

{{ inherits("Instance") }}

WIP Class, PlacesService is a service that is used to join players to other places. This class is currently unavailable in public servers.


{{ staticclass("Places") }}

{{ serverexclusive() }}

{{ notnewable() }}


## Methods

### NewServerAsync(placePath;string):string { method }

Request a new server with data

---
### NewServerAsync(data;NewServerRequestData):string { method }

Request a new server with data

---
### JoinPlaceAsync(plr;Player,to;string):nil { method }

Join a player to a public server of the specified place

---
### JoinPlacePartyAsync(plrs;{ Player },to;string):nil { method }

Join a party of player to a public server of the specified place

---
### JoinPrivateAsync(plr;Player,accessID;string):nil { method }

Join a player to a private server of the specified place

---
### JoinPrivatePartyAsync(players;{ Player },accessID;string):nil { method }

Join a party of player to a private server of the specified place

