# Two Pointers
- Pattern where two pointers iterate through the data structure in tandem until one or both pointers hit a certain condition.
- Useful when searching pairs in a sorted array or linked list.
    - Ex. Compare each element of an array to its other elements.

## How It Works
- Avoids the need to continually loop back through an array to find an answer.
- The back and forth with a single iterator is inefficient for time and space complexity - would be ok for brute force but produces O(n^2).

## How to Identify
- Feature a problem where you deal with sorted arrays or linked lists and need to find a set of elements that fulfill certain constraints.
- Set of elements in an array is a pair, triplet or a subarray.

## Problems

### Easy
- Squaring a sorted array

### Medium
- Triplets that sum to zero

### Hard
- Comparing strings that contain backspaces
