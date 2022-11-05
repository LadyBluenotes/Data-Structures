# Breadth First Search

## Definition
- Searches a tree or graph by searching levels of the tree first, starting at the root.
- Finds every node at the same level, most often moving left to right and, while doing this, it tracks the children nodes of the nodes on the current level.
- When finished examining a level it moves to the left most node on the next level.
- Bottom-right node is evaluated last.

## What to Know
- Optimal for searching a tree that is wider than is deep.
- Uses a queue to store information about the tree while it traverses a tree.
    - Uses more memory than DFS.
- Tends to be a looping algorithm.

## Time Complexity
- Search O(V + E)
    - Has to go through all edges and vertices.