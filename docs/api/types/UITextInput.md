---
title: UITextInput
description:
icon: polytoria/UITextInput
---

# :polytoria-UITextInput: UITextInput

{{ inherits("UIView") }}

UITextInput is a class that allows the user to enter text.


## Properties

### Text:string { property }

The text of the label.

---
### TextColor:Color { property }

The color of the text.

---
### JustifyText:TextHorizontalAlignmentEnum { property }

Determines how text is justified.

---
### FontSize:number { property }

The font size of the label.

---
### IsMultiline:boolean { property }

Determines whether the text input supports multiple lines.

---
### Placeholder:string { property }

The placeholder text displayed when the input is empty.

---
### PlaceholderColor:Color { property }

The color of the placeholder text.

---
### ReadOnlyColor:Color { property }

The color of the text when the input is read-only.

---
### IsReadOnly:boolean { property }

Determines whether the text input is read-only.

---
### FontAsset:FontAsset { property }

The font asset used for the text.

---

## Methods

### Focus():nil { method }

Forces the local player to focus on the text input.

---

## Events

### Submitted(text;string) { event }

Fires when user submitted the text

---
### Changed(text;string) { event }

Fires when user changed the text

---
### FocusEnter() { event }

Fires when user focuses on this input field

---
### FocusExit() { event }

Fires when user defocused from this input field

