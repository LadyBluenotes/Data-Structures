# Pig Latin

Translate the provided string to Pig Latin by following the rules below:
- For words that begin with consonant sounds, the consonant before the initial vowel should be moved to the end of the word sequence and "ay" affixed. (eg: "pig" : "igpay")
- For words that begin with consonant clusters, the clusters should be moved to the end of the word sequence and "ay" affixed. (eg. "glove" = "oveglay")
- For words that begin with vowel sounds, simply add "way" to the end of the word. (eg. "explain" = "explainway”)

## Algorithmic Thinking
- Test the first letter of the word to see if it is a consonant or a vowel
    - If a vowel, add 'way' to end of word.
- If consonant:
    - If stand alone:
        - consonant before the vowel should be moved to the end of the word sequence and "ay" added after.
    - If next to another consonant:
        - Consonant clusters moved to the end of the word sequence and "ay" added after

## Code Implementation

### Imperative Approach
1. Convert received string to lower case to prevent casing related errors.
2. Initialized a vowel variable and a vowel index variable (tells you where first vowel is).
3. Use an if else statement to check if first letter on word can be found within vowels array by calling .includes() on the array while passing the first letter of the string and, if true (implying first letter is vowel), add 'way' to end of string and return result.
4. If false, use a for of loop to iterate through the string in order to determine where the first vowel in the word occurs. Once located, use .indexOf() to retrieve its position int he string and store in vowel index variable, where loop will be terminated.
5. Use .slice() to manipulate string to generate pig latin equivalent.
    - str.slice(vowelIndex) - extract a portion of the string starting from first vowel up til end.
    - str.slice(0,vowelIndex) - extract portion of string starting at index 0 up to first vowel position
6. Combine extracted portions and add 'ay' to the end to form the final result and return.