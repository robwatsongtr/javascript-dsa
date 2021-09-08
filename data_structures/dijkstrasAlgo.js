

// Dijkstra's Algorithm!

/*

One of the most famous and widely used algos in the world. Many
big proprietray algos are built on top of Dijkstras algo.

What it does is find the shortest path between two verticies 
in a graph. Tremendous implications and use cases for this.

The algorithm:

1. Every time we look to visit a new node, we pick the with the
   smallest known distance to visit fist 

2. Once we've moved to that node we look at each of its neighbors.

3. For each neighboring node we calculate the distance by summing
   the total edges that lead to the node we're checking 
   _ from the starting node _

4. If the new total distance to a node is lessn than the previous 
  total, we store the new shorter distance for that node. 

*/

/*
Lets take this graph. Find the shortest path from A to E.

          A------4-------- B
          |                |
          2                3
          |                |
          C --2--- D --3---E
          \        |       /
           \       |      /
            \      1     /
             4     |    /
              \    |   1
               \   |  /
                \  | /
                 \ F
*/               


class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex( vertex ) {
    if( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge( vertex1, vertex2, weight ) {
    this.adjacencyList[vertex1].push( { node: vertex2, weight } );
    this.adjacencyList[vertex2].push( { node: vertex1, weight } );
  }

}