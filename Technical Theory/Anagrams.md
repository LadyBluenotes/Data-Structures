# Anagrams

Given two strings, write an algorithm to check if they are anagrams of each other. Return true if they pass the test and false if they don't.

## Algorithmic Thinking
- Two string parameters are being compared.
- Within the function we have to compare both words to see if they contain the same characters, the same amount of times.
- To avoid errors, we need to remove unwanted characters and spaces as they are not letters of the alphabet.
- Must convert all characters to common letter case to avoid errors due to varying capitalization.
-Must ensure they are the same length.

## Code Implementation

### Direct Comparison
1. Create a function that sanitizes the string using .toLowerCase(), .replace(), .split(), .sort() and .join().
    - Replace is called to replace every non-alphabetical character with an empty string leaving no spaces or symbols - this will require regex.
2. Once the string is sanitized, the two strings will be compared where a boolean will be returned.

### Character Map Comparison
** Fastest
1. Initialize an empty object to map the characters to.
2. Using a for of loop, iterate through each character of the string received.
3. For each character, check if it exists in the object - if it does, increment the value and if not, add the character and set property to 0.
4. Compare the character maps of both strings:
    - Check length - if they aren't return false, if they are:
        - Compare every character in string a to corresponding values in string b and if any values do not match, return false. If all values match, return true.