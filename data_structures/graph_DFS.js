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

class Graph {
  constructor() {
    this.adjacencyList = {}; 
  }

  addVertex( vertex ) {
    if( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge( vertex1, vertex2 ) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge( vertex1, vertex2 ) { 
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }

  removeVertex( vertex ) {
    while( this.adjacencyList[vertex].length ) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge( vertex, adjacentVertex );
    }
    delete this.adjacencyList[vertex]; // delete the vertex itself
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