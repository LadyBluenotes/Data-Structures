# Quick Sort

## Definition
- Divide and conquer algorithm.
- Partitions entire data set in half by selecting random pivot element and putting all smaller elements to the left of the element and larger ones to the right.
- Repeats process on left side until it is comparing only two elements at which point, the left side is sorted.
- Once left side is finished, performs same operation on right side.

## What to Know
- Computer architecture favours this.
- Changes array in place.
- Has the same big O as many other algorithms but is often faster in practice.

## Time Complexity
- Worst Case: O(n^2)
- Average Case: O(n log n)
- Best Case: O(n log n)

## Space Complexity 
- Worst Case: O(log n)