/*
DFS Graph

'Depth First' in general for trees and graphs: prioritizing vising children of a 
given node before visitiing siblings of a node. 

We 'deepen' the traversalbefore we 'widen' it. Whethere we're going left or 
right first doesn't really matter. 


Depth First Search on a Graph: 
Explore as far as possible before we back-track:

Once a node is visitied, it is 'crossed off' the adjacency list so it isn't' 
re-visited. 

DFS_RECUR(Vertex)
  if vertex is empty 
    return // base case
  add vertex to results list
  mark vertex as visited
  for each neighbor in vertex's neighbors:
    if neighbor is not visited:
      recursively call DFS on neighbor

*/

