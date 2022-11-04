# Counting the Vowels in a String of Text

Given a string of text, find and return the most recurring character.

## Algorithmic Thinking
- Only on parameter - string of text.
- Need to keep track of every character in the string as well as the number of times it exists (character mapping)

## Code Implementation

### For... in Iteration
1. Initialize empty object.
2. Use for of loop to iterate through text.
3. For every character, we check if it has been mapped already by calling .hasOwnProperty() method on object.
4. If present, increment otherwise add as a property and set value to 1.
5. Initialize the maximum character value and the maximum character to store the highest value encountered and the character with the highest value.
6. Loop through object and check if the character being evaluated has a greater value than max character value which is initially set to 0.
7. If evaluated character is higher, store in max character. If not, move on to next character.
8. Return max character which now holds the character with highest value, thus the most recurring.

### Forming Arrays from Character Map
1. Create character map with snippet of code similar to above.
2. .keys() will get the characters to map over.
3. .values() will get values to map over.
4. Using spread operator with Math.max() will return the maximum character value
5. Using .indexOf() to search the values array for the position of the maximum character value, which will correspond to the position in the character array with that number of characters, thus the highest recurring character.
6. Return character.
