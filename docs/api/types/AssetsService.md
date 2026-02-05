---
title: AssetsService
description:
icon: polytoria/AssetsService
---

# :polytoria-AssetsService: AssetsService

{{ inherits("Instance") }}

Service for managing/loading assets


{{ staticclass("Assets") }}

{{ notnewable() }}


## Methods

### NewAsset(assetClassName;string):BaseAsset { method }

Load new asset with the class name

---
### NewPTImage(imgID;number):PTImageAsset { method }

Load new image from Polytoria with the target ID

---
### NewPTAudio(audioID;number):PTAudioAsset { method }

Load new audio from Polytoria with the target ID

---
### NewPTMesh(assetID;number):PTMeshAsset { method }

Load new mesh from Polytoria with the target ID

---
### GetFileLinkByPath(path;string):FileLinkAsset { method }

Retrieve `FileLinkAsset` with the specified path

---
### GetFileLinkByID(id;string):FileLinkAsset { method }

Retrieve `FileLinkAsset` with the specified ID

