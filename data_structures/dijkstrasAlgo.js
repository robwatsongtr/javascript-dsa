// Dijkstra's Algorithm

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


// simple priority queue that uses a sorting algo, not a heap
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue( val, priority ) {
    this.values.push( { val, priority } );
    this.sort();
  };

  dequeue() {
    return this.values.shift();
  };

  sort() {
    this.values.sort( (a, b) => a.priority - b.priority );
  };

}


class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex( vertex ) {

    if( !this.adjacencyList[vertex] ) {
      this.adjacencyList[vertex] = [];
    }

  }
  
  // undirectional graph so edgeds added both directions 
  addEdge( vertex1, vertex2, weight ) {

    this.adjacencyList[vertex1].push( { node: vertex2, weight } );
    this.adjacencyList[vertex2].push( { node: vertex1, weight } );

  }

  // will return the nodes of the shortest path in order 
  dijkstraShortest( start, finish ) {

    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    // Build up initial state:
    //
    // 1.Set all distances to infinity
    // except for starting vertex which is 0. 
    //
    // 2. Add each vertex to the priority queue with a priority of infinity
    // except for the starting vertex wich will have priority 0. 
    //
    // 3. Set all vertices in previous to be null 
    for( let vertex in this.adjacencyList ) {
      if( vertex === start ) {
        distances[vertex] = 0; // 1
        nodes.enqueue( vertex, 0 ) // 2
      } else {
        distances[vertex] = Infinity;  // 1
        nodes.enqueue(vertex, Infinity); // 2
      }
      previous[vertex] = null; // 3
    }



  }

}

// priority queue tests: 
// var q = new PriorityQueue();

// q.enqueue('B', 3)
// q.enqueue('C', 5)
// q.enqueue('D', 2)
// q.enqueue('Q', 20)

// console.log( q.values ); // works! 

// console.log( q.dequeue() );
// console.log( q.dequeue() );
// console.log( q.dequeue() );
// console.log( q.dequeue() ); // works!

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

var graph = new WeightedGraph() 

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log( graph.adjacencyList );

graph.dijkstraShortest("A", "E");
