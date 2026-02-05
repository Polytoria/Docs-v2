---
title: NetworkedObject
description:
icon: polytoria/NetworkedObject
---

# :polytoria-NetworkedObject: NetworkedObject

NetworkedObject is a base class for all object that's synchronized by the network.

{{ abstract() }}

{{ notnewable() }}


## Properties

### Name:string { property }

Name of this object

---
### ClassName:string { property }

Class name of this object
{{ readonly() }}


---
### Shared:ScriptSharedTable { property }

A shared table accessible by scripts.
{{ nonetwork() }}


---
### NetworkedObjectID:string { property }

Returns networked ID of this object. Networked ID are always unique per network session.
{{ readonly() }}


---
### ObjectID:string { property }

Returns object ID of this object. Object ID originates from the .poly file.
{{ readonly() }}


---
### ExistInNetwork:boolean { property }

Returns true if this object exists in network, false if this object is spawned by the local client.
{{ readonly() }}


---

## Methods

### IsA(className;string):boolean { method }

Returns whether or not the instance is the specified class, this also checks for inheritance.

---
### Clone(parent;NetworkedObject?):NetworkedObject { method }

Clones the instance

---
### Destroy(time;number?):nil { method }

Destroys the instance (same as Delete method)

---
### Delete(time;number?):nil { method }

Deletes the instance (same as Destroy method)

---

## Events

### PropertyChanged(propertyName;string) { event }

Fires when a property of this object has changed

---
### Renamed() { event }

Fires when this object has been renamed

---
### TreeEntered() { event }

Fires when object enters the tree

---
### TreeExited() { event }

Fires when object exit the tree (via reparent or delete)

