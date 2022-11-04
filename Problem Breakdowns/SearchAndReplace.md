# Search and Replace

Receiving a sentence, a word in the sentence and a replacement for that word as arguments, perform a search and replace on the sentence using the arguments provided and return the new sentence.

## Code Implementation

### Using .replace()
1. Use an if statement to check of the first letter of the word word[0] matches the uppercase equivalent word[0].toUpperCase() of the letter.
2. If it does, convert the first letter of the replacement to uppercase and append the rest of the lowercase letters retrieved using the .slice() method.
3. Once word is now the same case as the word to be replaced, call .replace() on the sentence passing in the word to be replaced and the replacement word, which will return a new sentence with appropriately swapped words.
4. Return for final result.