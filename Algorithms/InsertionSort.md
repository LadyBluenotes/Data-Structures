# Insertion Sort

## Definition
- Comparison based sorting algorithm.
- If the cursor is smaller than the item on the left, it swaps positions and the cursor compares itself again tot he left hand size until it is put in its sorted position.
- Left side becomes increasingly sorted until it is fully sorted as it goes through the data set.

## What to Know
- Inefficient for large data sets, but can be faster than other algorithms for small ones.
- In practice, slightly less than O(n^2) since its comparison scheme only requires checking place if it is smaller than its neighbour.

## Time Complexity
- Best Case: O(n)
- Average Case: O(n^2)
- Worst Case: O(n^2)

## Space Complexity
- Worst case: O(n)