---
  
date: 2009-09-11 10:57:00+00:00

slug: deleting-multiple-selected-items-in-wpf
author: [Rahul Nath]
title: Deleting Multiple Selected Items in WPF
wordpress_id: 28
tags:
  - WPF
---

Hi,
Many a times while using listbox,listview etc there might be a need to delete the multiple selected items.
This can be easily achieved by the following piece of code

```csharp
 While ControlName.SelectedItems.Count &gt; 0 
   ControlName.Items.Remove(ControlName.SelectedItem)
End While
```

Happy Coding :)
