# Array Chunking

Given an array and a chunk size, divide the array into many sub-arrays where each sub-array has the specified length.

## Algorithmic Thinking
- Split one large array into smaller groups of a specified size.
- Loop through array, iterate with the number of chunks.
- Use .slice() to break up the segments.
- Use recursion to continue looping through.

## Code Implementation

### Using Arrays
1. Initialize an empty array with which we use to store every small chunk.
2. Using a for of loop, we use an if statement to check if result array is empty or if last group created is complete (already of specified size).
3. If it is empty, create a sub-array with current value as an element and push it into result array.
4. If not, retrieve last array from result and push current value into it until group is complete and required size is reached.
5. Return result which is the number of all groups created throughout the iteration.

### Using .splice()
1. Initialize a result array.
2. Using the spread operator, separate array into a copy array.
3. Using the while loop, loop through array until the length is 0 where you push the chunks of the array into the result array using 0 index and size index.
4. Return the result.

### Using .slice()
** Fastest
1. Initialize a result array.
2. Using a for loop, iterate through the array while repeatedly slicing off groups of the specified size using .slice() and push to results array.
3. Increment the iterator by size on each iteration in order to start new group.
4. Return results array.

### Using Recursion
** Second Fastest
1. Consistently reduce the problem set by slicing off chunks of the required size until all elements within the array have been grouped.
2. Add conditional at the beginning to serve as the terminating condition such that when the number of remaining elements is less than or equal to the specified size, return all the elements as one group.
3. Use .slice() to extract portions of the array as chunks as well as reduce the size of the original array continuously until terminating condition is met.