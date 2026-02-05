---
title: AchievementsService
description:
icon: polytoria/AchievementsService
---

# :polytoria-AchievementsService: AchievementsService

{{ inherits("Instance") }}

Service for managing achievements


{{ staticclass("Achievements") }}

{{ notnewable() }}


## Properties

### UseAchievementSound:boolean { property }

Determine if the achievement sound effect should play when user receives an achievement

---
### NotifyAchievements:boolean { property }

Determine if achievement toast should show when user receives an achievement

---

## Methods

### AwardAsync(userID;number,achievementID;number):nil { method }

Award achievement to the target user asynchronously.

{{ serverexclusive() }}

---
### HasAchievementAsync(userID;number,achievementID;number):boolean { method }

Check if the target user has the achievement, asynchronously.

---

## Events

### GotAchievement(achievementID;number) { event }

Fires when the local player got an achievement

{{ clientexclusive() }}

