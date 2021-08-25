/*

--Priority Queue: Common use case for a Binary Heap

A priority queue is a data structure where each element has a priority.
Elements with higher priorities are served before elements with lower priorites.

We have a collection of data and each element is assigned a priority.
We want to retrieve one element at a time out of this structure:
---Data is inserted, but not necessairly in order of priority, BUT we want to 
---retrieve them in order of priority 

A priority queue is a concept abstract from a heap. A priority queue could
be implemented by an array or a list. Would be slower, though: eg, store elements
in a list with different priorities, then iterate over it to find highest 
priority element. Its the difference between O(log n) and O(n) time complexity.

Will be implemented here as a MIN binary heap, as often (such as in operating systems)  
a lower number denotes a higher priority. 

*/

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

  // enqueue 
  //   accepts a value and a priority, 
  //   makes a new node, and puts it in the right spot 
  //   based off its priority (min binary heap)
  enqueue(val, priority) {
    let newNode = new Node(val, priority); // make a new node
    this.values.push(newNode); // push it to end of the values array
    this.bubbleUp(); // bubble it up to its final resting place in the heap
  }

  // helper method for enqueue
  bubbleUp() {
    let idx = this.values.length - 1; // initialize idx variable to the end of the array
    const nodeToPlace = this.values[idx]; // nodeToPlace set to that index ^^

    // loop through the array until we hit the root
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

  // dequeue 
  //   removes the root element, returns it, and 
  //   rearranges the heap based on priority. (min binary heap)
  dequeue() {
    const minNode = this.values[0]; // store minimum priority node to continue
    const endNode = this.values.pop(); // store the end (max) node to sink down

    if( this.values.length > 0 ) {
      this.values[0] = endNode; 
      this.sinkDown()
    }
  }

  // helper method for dequeue
  sinkDown() {
    
  }


}