# Linked List

## Definition
- Stores data with nodes that point to other nodes.
    - Nodes = has one data and one reference (to another node). 
- Chains nodes together by pointing one node's reference towards another node.

## What to Know
- Designed to optimize insertion and deletion - slow with indexing and searching.
- Doubly linked lists has nodes that also reference the previous node.
- Circularly linked lists is a linked list whose tail references the head.
- Stacks are commonly implemented with linked lists.
    - Made with a linked list by having the head be the only place for insertion and removal.
- Queues can be used as well.
    - Made with a linked list that only removes from the head and adds to tail.

## Time Complexity
- Indexing, Searching, Insertion - O(n)
- Appending, Prepending - O(1)
