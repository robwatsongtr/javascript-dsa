// Dijkstra's Algorithm!

/*

One of the most famous and widely used algos in the world. Many
big proprietray algos are built on top of Dijkstras algo.

What it does is find the shortest path between two verticies 
in a graph. Tremendous implications and use cases for this.


*/


class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  // addVertex
  // if no duplilcate, make an entry in the adjacently list object
  // that is { vertex: [] }, name is vertex name, value is empty array.
  addVertex( vertex ) {
    if( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }

  // instead of storing just a string in the adj list, we will store a
  // nested object with both the vertex name and its weight
  addEdge( vertex1, vertex2, weight ) {
    this.adjacencyList[vertex1].push( { node:vertex2, weight } );
    this.adjacencyList[vertex2].push( { node:vertex1, weight } );
  }

}