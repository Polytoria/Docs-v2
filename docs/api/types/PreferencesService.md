---
title: PreferencesService
description:
icon: polytoria/PreferencesService
---

# :polytoria-PreferencesService: PreferencesService

{{ inherits("Instance") }}

PreferencesService is a service that allows scripts to access some of the user preferences


{{ staticclass("Preferences") }}

{{ clientexclusive() }}

{{ notnewable() }}


## Properties

### UsePhotoMode:boolean { property }

Determines whether the player has photo mode enabled.
{{ readonly() }}


---
### UsePostProcessing:boolean { property }

Determines whether the player has post-processing effects enabled.
{{ readonly() }}


---

## Events

### SettingChanged(settingName;string,setTo;any) { event }

Fired when a user preference setting is changed.

