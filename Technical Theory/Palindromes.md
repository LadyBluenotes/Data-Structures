# Palindromes

Given a string of text, return true or false indicating whether or not the text is a palindrome.

## Algorithmic Thinking
1. Challenges says given a string of text, therefore implying our function would have a string-typed parameter which we may call 'text'.
2. Evaluate if it's a palindrome, meaning you would have to reverse the string and compare that string with what was passed in as the argument. 
3. To avoid issues with letter casing, ensure the argument is either all upper or lower case.
4. Finally, return true or false depending on result, true for when palindrome and false for when it is not.

## Code Implementation

### Intuitive Approach
** Slowest
1. Function accepts a parameter which is a string of text to be tested.
2. Next, convert all letters of string to the same case, call .split() on the string that is received to spread the characters into an array.
3. Call .reverse() on array to re-order elements into its reverse.
4. Call .join() to form a string once again.
5. Compare reversed string to parameter string to return boolean.

### Looping through and comparing Characters
1. Convert all letters of string to the same case, use .split() to spread characters into an array.
2. Use .every() to loop through the array and perform our check.
    - Tests whether all elements in the array pass the test implemented by the provided function. Would evaluate as true if the test passes and false if not.
    - Function in this case accepts the current letter and its index in the array as parameters and we return a result of the comparison between the letter and the letter currently occupying the position this letter would assume if the string was reversed. 
3. Result of .every() evaluation will be stored in result, which then be returned.

### Looping through and Comparing Characters
** Fastest
1. Initialize and store length of text in a variable.
2. Loop through string to halfway point.
3. Create an if statement where if the text is compared should the string be reversed and, if not, returned to be false.
4. If after looping through all characters there is no character out of position, return true.

