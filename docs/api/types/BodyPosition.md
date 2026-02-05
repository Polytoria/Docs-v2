---
title: BodyPosition
description:
icon: polytoria/BodyPosition
---

# :polytoria-BodyPosition: BodyPosition

{{ inherits("Instance") }}

BodyPosition are objects that apply a force to their parent until they reach the target position.


## Properties

### TargetPosition:Vector3 { property }

Determines the target position that the body applies forces to get to.

---
### Force:number { property }

Determines how much force the body applies.

---
### AcceptanceDistance:number { property }

Determines how close the body has to be to the target position to stop applying forces to it.

