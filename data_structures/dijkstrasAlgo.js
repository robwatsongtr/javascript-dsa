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

// ------------Priority Queue as binary heap---------------------

class Node {
  constructor(val, priority) {
    this.val = val; 
    this.priority = priority; 
  }
}

class PriorityQueue {
  constructor(value) {
    this.values = []
  }

  // enqueue with bubble up helper func 
  //  accepts a value and a priority, 
  //  makes a new node, and puts it in the right spot 
  //  based off its priority (min binary heap)
  enqueue(val, priority) {

    let newNode = new Node(val, priority); // make a new node
    this.values.push(newNode); // push it to end of the values array
    this.bubbleUp(); // bubble it up to its final resting place in the heap

  }

  bubbleUp() {
    
    let idx = this.values.length - 1; // initialize idx variable to the end of the array
    const nodeToPlace = this.values[idx]; // nodeToPlace set to that index ^^

    // while condition necessary so that we don't go to negative indicies
    while( idx > 0 ) {

      let parentIdx = Math.floor( (idx-1) / 2 ); // calculation to find parent index
      let parent = this.values[parentIdx]; // the current parent we're looking at

      // has node found its resting position? if so we're done
      if( nodeToPlace.priority >= parent.priority ) break;

      //otherwise, swap
      this.values[parentIdx] = nodeToPlace;
      this.values[idx] = parent; 

      // update the index to be the parent index, and carry on...
      idx = parentIdx; 

    }

  }

  // dequeue with sinkdown helper func
  //  removes the root element, returns it, and 
  //  rearranges the heap based on priority. (min binary heap)
  dequeue() {

    const minNode = this.values[0]; // store minimum priority node to return
    const endNode = this.values.pop(); // store the end (max) node to eventually sink down

    if( this.values.length > 0 ) {
      this.values[0] = endNode; // stick the max at the beginning / root
      this.sinkDown(); // sink it down to its final resting place
    }
    return minNode; 

  }

  sinkDown() {

    let idx = 0; // will update as swap progresses down heap
    const length = this.values.length;  // code shortener 
    const nodeToPlace = this.values[0]; // the node being sunk down, starts at root

    while( true ) {

      // compute the next children, ongoing, in the loop....
      let leftChildIdx = (2 * idx) + 1; 
      let rightChildIdx = (2 * idx) + 2; 

      // prepare the variables to hold the nodes at those indicies...
      let leftChildNode, rightChildNode; 

      // will keep track of if we did any swaps. This will allow a break
      // out of the loop if the swaps stop; the value has sunk to its final place. 
      let swap = null; 

      // ------Left value check.
      // if computed index is in bounds on the left side...
      if( leftChildIdx < length ) {

        // set the left child node to the value at that index
        leftChildNode = this.values[leftChildIdx];

        // if the left child node priority is less than the nodeToPlace
        // store in temp swap var to check against right child
        if( leftChildNode.priority < nodeToPlace.priority ) {
          swap = leftChildIdx;
        }

      }

      // -------Right value check.
      // if computed index is in bounds on the right side...
      if( rightChildIdx < length ) {

        // if so, set the left child to the value at that index 
        rightChildNode = this.values[rightChildIdx];

        // logic more complicated, need to check if its the right we really
        // want to swap with as oppposed to the left (ie right is smaller)
        if( 
          ( swap === null && rightChildNode.priority < nodeToPlace.priority ) ||
          ( swap !== null && rightChildNode.priority < leftChildNode.priority )
        ) {
          swap = rightChildIdx; 
        }
       
      }

      if( swap === null ) break; // break out of loop if still null here cuz we're done

      // do the swap
      this.values[idx] = this.values[swap]; 
      this.values[swap] = nodeToPlace; 

      // update the index, and continue on in the loop
      idx = swap; 

    }
    
  }

}

// ------------Weighted Graph and Dijkstras Algo-----------------------------

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
    let smallest; // current smallest value 
    let path = []; // to return at end

    // Build up initial state:
    //  1.Set all distances to infinity
    //    except for starting vertex which is 0. 
    //  2. Add each vertex to the priority queue with a priority of infinity
    //    except for the starting vertex wich will have priority 0. 
    //  3. Set all vertices in previous to be null 
    for( let vertex in this.adjacencyList ) {

      if( vertex === start ) {
        distances[vertex] = 0; 
        nodes.enqueue( vertex, 0 ) 
      } else {
        distances[vertex] = Infinity;  
        nodes.enqueue(vertex, Infinity); 
      }
      previous[vertex] = null;

    }

    // as long as there are nodes in the priority queue 
    while( nodes.values.length ) {

      // Dequeue a vertex from the queue. This will give current smallest value.
      // If its the same as the ending vertex we're done. 
      // 'finish' is the variable for the ending vertex that is passed in.
      smallest = nodes.dequeue().val; 
      if( smallest === finish ) {
        
        // build up path to return at end
        while( previous[smallest] ) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;

      }

      // otherwise loop through each value in the adj list at that vertex.
      if( smallest || distances[smallest] !== Infinity ) {

        for( let neighbor in this.adjacencyList[smallest] ) {

          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node

          if( candidate < distances[nextNode.node] ) {

            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate; 

            // updating previous - how we got to neighbor 
            previous[nextNeighbor] = smallest; 

            // enqueue in priority queue with new priority 
            nodes.enqueue(nextNeighbor, candidate);

          }
        }

      }


    } 

    const finalPath = path.concat(smallest).reverse();

    console.log(finalPath);

    // return finalPath // doesn't work 
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

graph.dijkstraShortest("A", "F");
