---
title: PurchasesService
description:
icon: polytoria/PurchasesService
---

# :polytoria-PurchasesService: PurchasesService

{{ inherits("Instance") }}

Service responsible for handling in-game purchases and ownership verification.


{{ staticclass("Purchases") }}

{{ notnewable() }}


## Methods

### PromptAsync(player;Player,assetID;number):boolean { method }

Prompt the purchase prompt to player

{{ serverexclusive() }}

---
### OwnsItemAsync(player;Player,assetID;number):boolean { method }

Checks asynchronously if the specified player owns the asset with the given asset ID.

