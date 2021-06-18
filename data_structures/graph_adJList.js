/*
---GRAPHS---

Edge: connection. Vertex: node. 

_Undirected graph_: two way connection or no specified connection of the edge
between two verticies. _Directed graph_: one way connection between two verticies.

_Unweighted graph_: no value or magnitude associated with each edge, 
_Weighted graph_ has a value associated with an edge. 

----Representing a Graph:

What we need to store a graph are the nodes and a way to store the connections.
Two ways: Adjacency Matrix and Adjacency list.

Adjacency Matrix is a nested 2-d array. 

Adjacency List: use and array or list to store the edges in an array. You use
the position in the array to store the connection. 
*You can also use a hash table or key value pair to store the edges. 

Adjacency List can take up less space in sparse graphs. Adjacency Matrix
can take up more space in sparse graphs. Adj List is faster to iterate over 
all edges, Adj Matrix is slower to iterate over all edges. Adj List can be slower to
lookup a specific edge, and Adj Matrix can be faster to look up specific edge.

*/

// Adjacency List implementation.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}