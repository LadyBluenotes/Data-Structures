# String Reversal

Most common algorithm with JS.

## Algorithmic Thinking
1. Function will receive one parameter (string to be reversed).
2. Manipulate characters in string logically in order to return the string in reverse.

## Solutions

### Solution 1 - Chain built-in methods
** Slowest solution
.split() to separate string into an array of characters
.reverse() to reverse order of elements of an array
.join() to combine elements of an array into a string 

** Improve
Spread operator can be used in lieu of .split().

### Solution 2 - The For-Loop
For loops are used to execute a piece of code for as long as the condition is met.
Start with i being set to the length of the string - 1 and cycle until i is no longer greater than or equal to 0

** Improve
Use for of statement - used to execute certain pieces of code for each distinct item (property) of an iterable object.

### Solution 3 - Recursion
Using .substr() method to return a portion of the text received, which expects 2 parameters with one specifying the starting index and the other specifying the number of characters after (which is optional).

We first run to see if we have an empty string (known as terminal case). When the text is empty, empty string is returned and function terminates, when it isn't we will call reverseString() to remove the first character of the text that is passed in.


### Solution 4 - Using .reduce()
** Quickest solution
.reduce() is used to execute a function on every member of an array until it results in a single output value.
    - Receives function to be executed and initial value of accumulator as arguments.

1. Split text into an array.
2. Call reduce which begins with an empty string as initial value and accumulates each character in reverse until it has gone through all characters in array.
