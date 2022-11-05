# Depth First Search

## Definition
- Searches a tree or graph by searching depth of the tree first, starting at the root.
- Traverses left down a tree until it cannot go further. Once reaching the end, traverses back up trying the right child of the nodes on that branch and, if possible, left from the right children.
- When finished examining a branch, it moves to the node right of the root then tries to go left on all its children until it reaches the bottom.
- The right most node is evaluated last .

## What to Know
- Optimal for searching a tree that is deeper than it is wide.
- Uses a stack to push nodes onto.
- Once search cannot go any further, it begins evaluating the stack.
- Could go unnecessarily deep in the search.
- Tends to be a recursive algorithm.

## Time Complexity
- Search O(V + E)