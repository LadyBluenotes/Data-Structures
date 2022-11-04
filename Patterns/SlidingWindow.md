# Sliding Window
- Pattern used to perform required operation on a specific window size on a given array or linked list.
    - Ex. Finding longest subarray containing all 1s.

## How it Works
- Starting from first element, keep shifting right by one element and adjust the length of the window according to the problem that you are solving.
- Some scenarios, the window remains constant and in others they grow or shrink.

## How to Identify
- Input: Linear data structure such as array, linked list, string.
- Problem: Asked to find longest/shortest substring, subarray, or a desired value.

## Leetcode Q's

### Easy
- Maximum sum subarray of size 'k'

### Medium
- Longest substring with 'k' distinct characters 

### Hard
- String anagrams