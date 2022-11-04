# Find the Longest Word in the Sentence

Given a sentence, return the longest word in the string.

## Algorithmic Thinking
- Will receive a string of text.
- Must loop through every word in string received and compare length to determine the longest.

## Code Implementation

### Using a For-Loop
1. Initialize a variable that would store the string of text split into an array (using .split()).
2. Initialize a variable that would store the max length of a word.
3. Initialize a variable that would store the word that is the longest.
4. Loop through the array of words.
5. Using an if statement, compare each word length to the max length variable and, if larger, assign the words length to the result variable and the word to the longest word variable.
6. Return the longest word.

### Using .reduce()
1. Initialize a variable for result.
2. Split the text into an array and chain .reduce() where there would be a reducer function called on every word until the final output is arrived at.
3. In reducer function, we compare the length of the current word under evaluation with the length of our accumulator variable (max length word) which is set to an empty string to start. 
    - Whenever the length of the word exceeds what is currently stored, current word is set to new accumulator value. Otherwise, it will retain its value for enxt comparison.
4. Result variable now holds longest word in sentence and is returned accordingly.

### Using .sort()
1. Initialize a variable and split the string into its separate words.
2. Call .sort() immediately after .split() where comparison would be made from one word to another - subtract length of second from first and given result. it will know how to sort.
3. Return the first word in sorted array (as it would be the largest).