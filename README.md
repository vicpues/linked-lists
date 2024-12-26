# Linked lists assignment

A basic implementation of a doubly linked list for The Odin Project's [fullstack javascript course](https://www.theodinproject.com/lessons/javascript-linked-lists).

Supports the following methods & accessors:

-   `.size` - Read-only property that contains the size of the list.
-   `.head` - Read-only property that returns the first item of the list.
-   `.tail` - Read-only property that returns the last item of the list.
-   `.append(value)` - Adds a \<value\> at the end of the list.
-   `.prepend(value)` - Adds a \<value\> at the beginning of the list.
-   `.at(index)` - Returns the value at the specified \<index\>.
-   `.pop()` - Removes the last item in the list and returns its value, or `null` if the list is empty.
-   `.shift()` - Removes the first item in the list and returns its value, or `null` if the list is empty.
-   `.contains(value)` - Returns `true` if the list has an item with the specified \<value\>, otherwise returns `false`.
-   `.find(value)` - Returns the index of the specified \<value\>, or `null` if it's not present in the list.
-   `.toString()` - Returns a string with the values of every item in the list.
-   `.insertAt(value, index)` - Inserts the specified \<value\> into the list at the provided \<index\>.
-   `.removeAt(index)` - Removes the item at the specified \<index\>
-   `LinkedList.from(array)` - Static method that takes in an array and returns its equivalent linked list.
