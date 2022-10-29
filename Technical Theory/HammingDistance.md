# Hamming Distance

Definition: the hamming distance between two strings of equal length is the number of positions at which these strings vary. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

The challenge: Given two strings of equal length, calculate and return the the hamming distance.

## Algorithmic Thinking
- Check if strings passed in arguments meet the requirement before any comparison.
- Compare every character in first string with character holding their position in second string to identify the points where differences exist as it is the total count of these instances that gives us the hamming distance.
- All comparisons must be in a common case as a will differ from A.

## Code Implementation
1. Initialize a results variable to 0;
2. Using an if ... else compare the string sizes, if strings don't match throw an error "strings do not have equal length".
3. Using a for loop with the length set to one of the strings, compare each character with the character in their corresponding position for string B, ensuring they are all the same case.
3. Increment counter if the strings do not have matching characters at the same position.
4. Return result once all characters have been compared.