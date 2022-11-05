# Hash Table or Hash Map

## Definition
- Stores data with key-value pairs.
- Hash functions accept a key and return an output unique only to that specific key.
    - Known as hashing.
        - Concept that an input and an output have a one-to-one correspondence to map information.
        - Return a unique address in memory for that data so things will not overlap.

## What to Know
- Designed to optimize searching, insertion and deletion.
- Hash collisions - hash function returns the same output for two distinct inputs.
    - All hash functions have this problem.
    - Often accommodated by having hash tables be very large.
- Hashes are important for associative arrays and database indexing.

## Time Complexity
- Indexing, searching and insertion O(1).