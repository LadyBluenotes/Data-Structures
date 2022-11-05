# Arrays

## Definition
- Stores data elements based on sequently, most commonly 0-based, index.

## What to Know
- Optimal for indexing.
- Bad for searching, inserting, and deleting (except at end).
- Linear arrays (one dimensional), are most basic.
    - Static in size.
- Dynamic arrays are similar to one dimensional arrays but have reserved space for additional elements.
    - If dynamic array is full, it copies contents to a larger array.
- Multi-dimensional array are nested arrays that allow for dimensions such as an array of arrays, providing 2 dimensional special representation via x, y coordinates.

## Time Complexity
- Indexing:
    - Linear O(1)
    - Dynamic O(1)
- Search:
    - Linear O(n)
    - Dynamic O(n)
- Optimized Search:
    - Linear O(log n)
    - Dynamic O(log n)
- Insertion:
    - Linear n/a
    - Dynamic O(n)
