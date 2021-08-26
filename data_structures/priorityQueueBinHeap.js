/*

--Priority Queue: Common use case for a Binary Heap

A priority queue is a data structure where each element has a priority.
Elements with higher priorities are served before elements with lower priorites.

We have a collection of data and each element is assigned a priority.
We want to retrieve one element at a time out of this structure:
---Data is inserted, but not necessairly in order of priority, BUT we want to 
---retrieve them in order of priority 

A priority queue is a concept abstract from a heap. 

A priority queue could be implemented by an array or a list. Would be slower, though: 
eg, store elements in a list with different priorities, then iterate over it to find 
highest priority element. Its the difference between O(log n) and O(n) time complexity.

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
        // want to swap with as oppposed to the left (ie right is larger)
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

let ER = new PriorityQueue()

ER.enqueue('broken arm', 2)
ER.enqueue('high fever', 4)
ER.enqueue('common cold', 5)
ER.enqueue('gunshot wound', 1)
ER.enqueue('glass in eye', 3)



console.log(ER);

console.log( ER.dequeue() );
console.log( ER.dequeue() );
console.log( ER.dequeue() );
console.log( ER.dequeue() );
console.log( ER.dequeue() );
console.log( ER.dequeue() );



