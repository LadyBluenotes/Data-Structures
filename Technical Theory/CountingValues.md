# Counting Vowels in a String of Text

## Algorithmic Thinking
1. Write a function that receives a parameter (a string of any length would be passed as the argument)
2. Within the function, one would have to go through the text and search for the occurrences of the values (a,e,i,o,u).
3. Function then returns a total number of matches (values) found.

## Solutions

### Iterative Approach
- Loop through each letter of the string passed and then check to see if any match english vowels.
- Initialize a counter to the value of 0 - when match is found, counter is incremented.
- At the end, counter is returned with total number of values found.

1. Declare constant
2. Use for of loop to iterate through each letter of text.
3. Convert all letters to lower case to avoid instances of uppercase vowels in text.
4. In loop, use if statement to check if letter is included in array of values defined earlier (using .includes()).
5. If condition is true, increment counter.
6. After looping, return counter with equivalent of vowels found.

### Using Regular Expressions 
** Faster.

1. Within function call .match method which returns an array of matches found after comparing the regular expression passed in as an argument within the text.
2. ReGex specifies the letters to be looked for within the brackets [].
3. Use conditional to check if any matching instances were found.
4. If .match() is truthy within the conditional, return the number of matches found (length of the array) and if falsy, return 0 as no matches were found.
