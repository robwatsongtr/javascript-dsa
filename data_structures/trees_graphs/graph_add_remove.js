/*
---GRAPHS---

Edge: connection. 
Vertex: node. 

_Undirected graph_: two way connection or no specified connection of the edge
between two verticies. _Directed graph_: one way connection between two verticies.

_Unweighted graph_: no value or magnitude associated with each edge, 
_Weighted graph_ has a value associated with an edge. 

----Representing a Graph:

What we need to store a graph are the nodes and a way to store the connections.
Two ways: Adjacency Matrix and Adjacency list.

Adjacency Matrix is a 2-d array. 

Adjacency List: use and array or list to store the edges in an array. You use
the position in the array to store the connection. 
*You can also use a hash table or key value pair to store the edges. 

Adjacency List can take up less space in sparse graphs. Adjacency Matrix
can take up more space in sparse graphs. Adj List is faster to iterate over 
all edges, Adj Matrix is slower to iterate over all edges. Adj List can be slower to
lookup a specific edge, and Adj Matrix can be faster to look up specific edge.

*/

// Adjacency List implementation. Undirected. 

class Graph {
  constructor() {
    this.adjacencyList = {}; // adjacency list is a map/hash table 
  }

  // addVertex
  // if no duplilcate, make an entry in the adjacently list map
  // that is { vertex: [] }, name is vertex name, value is empty array.
  addVertex( vertex ) {
    if( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }

  // addEdge
  // find in the adjacency list vertex1, and push into vertex2
  // and do the opposite, since we have an undirecdted two way graph.
  addEdge( vertex1, vertex2 ) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // removeEdge 
  // reassign the key of vertex 1 to be an array that does not contain vertex2
  // reassign the key of vertex 2 to be an array that does not contain vertex1
  removeEdge( vertex1, vertex2 ) { 
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }

  // while loop 'pops off' the edges from the passed in vertex 
  // to remove all references 
  removeVertex( vertex ) {
    while( this.adjacencyList[vertex].length ) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge( vertex, adjacentVertex );
    }
    delete this.adjacencyList[vertex]; // delete the vertex itself
  }

}



var g = new Graph();

g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addVertex("Los Angeles");
g.addVertex("Hong Kong");

g.addEdge("Dallas","Tokyo");
g.addEdge("Dallas", "Aspen");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.adjacencyList);

g.removeVertex("Hong Kong");

console.log(g.adjacencyList);


// g.removeEdge('Dallas', 'Aspen');
// console.log(g.adjacencyList);

// g.removeEdge('Dallas', 'Tokyo');
// console.log(g.adjacencyList);