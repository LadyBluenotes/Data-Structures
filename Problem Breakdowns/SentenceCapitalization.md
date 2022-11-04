# Sentence Capitalization

Given a sentence containing two or more words, return the equivalent of the sentence when capitalized.

## Algorithmic Thinking
- Write a function that receives a sentence to be converted as an argument. 
- Go through every word in sentence and capitalize the first letter only.

## Code Implementation 

### .forEach() method
1. Initialize a variable where you call .toLowerCase() method on the string of text received to convert the entire sentence to lower case, chained with the .split() method in sequence to divide the lowercase sentence into an array of words as shown below.
2. Call .foreach() to iterate through every element (word) in the array and execute a function on it that will take the first letter of the word and turn it to uppercase using .toUpperCase().
3. To retrieve the remaining part of the word in lower case, we use .slice() to slice the string starting from position one til the end.
4. Combine the transformed first letter and sliced section together to form capitalized word which is pushed into an initialized array of capitalized words.
5. Combine each element in the new array using .join() and pass an empty space as the separator to give a capitalized sentence, which is then returned.

### Using .map() and .slice()
1. Create a new array with all the words in lowercase.
2. Use .map() to loop through every word in the array and capitalize the first letter.
3. Return a capitalized sentence by joining the words in the mapped array with a blank space as the separator.

### Using .map() and .replace()
1. Create a new array with all the words in lowercase.
2. Map through every word and replace the first letter of each word (word[0]) with an uppercase version of the same letter, then add the capitalized word using the .push() method to a new array.
3. Return capitalized sentence.