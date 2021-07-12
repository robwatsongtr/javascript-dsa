/*
BFS Graph Traversal

Visit neighbors at 'current depth' first!

Prioritizes visiting all the neighbors at a given depth before moving downwards
or visiting neighbors of neighbors.

Key point: BFS uses a queue data structure as opposed to stack structure for DFS.s

*/



class Graph {
  constructor() {
    this.adjacencyList = {}; 
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

  // BFS ----------------------------------------------------------------------
  
  BFS_graph( start ) {

    let queue = [];
    let result = [];
    let visited = {};
    let currentVertex;
    let adjacencyList = this.adjacencyList; 

    queue.push( start )
    visited[start] = true; 
    
    while( queue.length > 0 ){

      console.log(queue);

      // remove vertex from front of queue and push into result array
      currentVertex = queue.shift(); 
      result.push( currentVertex);

      // Loop over each vertex in the adj list for the vertex you are visitng.
      // if it is not inside the object that stores visited nodes, mark it as
      // visited and enqueue (push) that vertex.
      adjacencyList[currentVertex].forEach( neighbor  => {
        if( !visited[neighbor] ) {
          visited[neighbor] = true; 
          queue.push( neighbor ); 
        }
      });

    }
    return result; 
  }

}
/*
Example graph:

          A
       /     \
      B       C
      |       |
      D ----- E
      \       /
       \     /
          F
*/        

// set up example graph 
let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.adjacencyList);
console.log( g.BFS_graph("A") );