# Selection Sort

## Definition
- Comparison based sorting algorithm.
- Starts with cursor on the left, iterating left to right.
- Compares the left side to the right, looking for the smallest known item.
    - If left is smaller than item on the right, it continues iterating.
    - If left is larger than the right, the item on the right becomes the smallest number.
    - Once all items have been checked, it moves the known smallest to the cursor and advances the cursor to the right and starts over.
- As this processes the data set, it builds a fully sorted left side of the data until the entire data set is sorted.
- Changes the array in place.

## What to Know
- Inefficient for large data sets.
- Simple to implement.

## Time Complexity
- Base case: O(n^2)
- Average case: O(n^2)
- Worst case: O(n^2)

## Space Complexity
- Worst case O(1)