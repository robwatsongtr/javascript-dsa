/*
DFS Graph Traversal RECURSIVE

'Depth First' in general for trees and graphs: prioritizing vising children of a 
given node before visitiing siblings of a node. 

We 'deepen' the traversalbefore we 'widen' it. Whethere we're going left or 
right first doesn't really matter. 

----------------------------------------------------------------

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

  // DFS RECURSIVE----------------------------------------------------------------------

  DFS_recursive( start ) {
    let result = []; // array to return 
    let visited = {}; // object to store visited nodes 
    let adjacencyList = this.adjacencyList; // otherwise would get error 

    (function dfs(vertex) {
      if( !vertex ) return null; // base case return if no more to visit 
      visited[vertex] = true; // mark that vertex as visited, eg  { A : True}
      result.push(vertex);  // push vertex into result array 

      // loop over values in adjacency list (neighbors) for that vertex
      // if any have not been visited, recursively invoke helper func with that vertex
      // here we are using the Immediately Invoked Function Expression pattern 
      adjacencyList[vertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          return dfs(neighbor); // recursively invoke helper func with that vertex
        }
      });

    })(start); // invoke helper function with starting vertex 

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
console.log( g.DFS_recursive("A") );