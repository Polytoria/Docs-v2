---
title: Instance
description:
icon: polytoria/Instance
---

# :polytoria-Instance: Instance

{{ inherits("NetworkedObject") }}

Instance is the base class of all classes. Every class derives from it and has all properties, events and functions Instance has.

{{ abstract() }}

{{ notnewable() }}


## Properties

### Parent:Instance { property }

Defines the parent of this instance in the hierarchy.

---
### EditableChildren:boolean { property }

Determine if children is editable, this is to be used if this instance is a Linked model. Only used in creator.

---
### Tags:{ string } { property }

Tags associated with this instance.

---
### Archivable:boolean { property }

Determines if this instance should be saved during the saving process. Useful for addons that wants to create a temporary instance.

---

## Methods

### GetDescendants():{ Instance } { method }

Gets all descendants of this instance.

---
### FindChild(name;string):Instance { method }

Finds a child of this instance by name.

---
### WaitChild(name;string,timeoutSec;number?):Instance { method }

Wait for children to be added.

---
### FindChildByClass(className;string):Instance { method }

Finds a child of this instance by class name.

---
### FindChildWithTag(tag;string):Instance { method }

Find first child with the specified tag

---
### GetChildrenWithTag(tag;string):{ Instance } { method }

Get children with the specified tag

---
### FindAncestorByClass(className;string):Instance { method }

Find ancestor by the specified class name

---
### FindChildByIndex(index;number):Instance { method }

Find child by it's index (index for this function starts from 0)

---
### MoveChild(child;Instance,index;number):nil { method }

Move children to specified index (index for this function starts from 0)

---
### GetChildren():{ Instance } { method }

Gets all children of this instance.

---
### GetChildrenOfClass(className;string):{ Instance } { method }

Gets all children of this instance that are of the specified class.

---
### IsAncestorOf(instance;Instance):boolean { method }

Determines if this instance is an ancestor of the given instance.

---
### IsDescendantOf(instance;Instance):boolean { method }

Determines if this instance is a descendant of the given instance.

---
### IsDescendantOfClass(className;string):boolean { method }

Determines if this instance is a descendant of the given class.

---
### New(className;string,parent;Instance?):Instance { method }

Creates a new instance of the specified class.

---
### AddTag(tag;string):nil { method }

Adds a tag to this instance.

---
### RemoveTag(tag;string):nil { method }

Removes a tag from this instance.

---
### HasTag(tag;string):boolean { method }

Checks if this instance has the specified tag.

---
### Reparent(to;Instance):nil { method }

Reparent this instance to another instance

---
### GetParent():Instance { method }

Gets the parent of this instance.

---
### SetParent(newParent;Instance):nil { method }

Sets the parent of this instance.

---

## Events

### ChildAdded(child;Instance) { event }

Fires when child has been added to this instance

---
### ChildRemoved(child;Instance) { event }

Fires when child has been removed from this instance (either via reparent or delete)

---
### ChildDeleting(child;Instance) { event }

Fires when child is being deleted from this instance

---
### ChildDeleted(child;Instance) { event }

Fires when child has been deleted from this instance

