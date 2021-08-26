/*

BINARY HEAPS:

Binary Heaps are trees. 

All heaps are as compact as possible: All the children of each node
are as full as they can be and left children are filled out first.

--MaxBinaryHeap:

*Each parent node has at most two child nodes. 
***The value of each PARENT node is a always GREATER than its child nodes. 
*There are no guarantees between sibling nodes. 
*No implied ordering between siblings. 


--MinBinaryHeap:

*Each parent node has at most two child nodes. 
***The value of each CHILD node is always GREATER than its parent nodes. 
*There are no guarantees between sibling nodes. 
*No implied ordering between siblings. 

How are heaps represented? Often flattened in an array, with the 
root being the first sub, then BFS across the first level, 
BFS across 2nd level, etc. 


---

Binary Heap is typcally modeled in an array. 

The mathematical relationship between the parent and child nodes:

For any index of an array n:
  The left child is stored at index 2n + 1
  the right child is at index 2n + 2       
      
For any child node at index n:
  Its parent is at index ( ( n-1 ) / 2 )floor 
   
Time Complexity of Binary Heap:
Insertion: O(log n)
Removal: O(log n) -> unlike BST, which can be as bad as O(n) 
Search: O(n) ->  because no implied order along siblings 

*/

class MaxBinaryHeap {
  constructor(value) {
    this.values = []
  }


  // Insert an element, will result in a proper binary heap and the element
  // finding its right place 
  insert(element) {
    this.values.push(element); // push to end of array
    this.bubbleUp(); // finds the right place for the value. 
  }
  
  // helper method for insert()
  bubbleUp() {
    let idx = this.values.length - 1; // find index of the end of the array
    const element = this.values[idx]; // set element to that index of end of array 

    // while condition necessary so that we don't go to negative indicies
    while( idx > 0 ) {

      let parentIdx = Math.floor( (idx-1) / 2); // calculation to find parent
      let parent = this.values[parentIdx]; // the current parent in the array 

      if( element <= parent ) break; // the vaule has found its final position 

      // otherwise, swap
      this.values[parentIdx] = element; // swap element to parent 
      this.values[idx] = parent; // swap parent to element 

      // and then update index to be parent
      idx = parentIdx;

    }

  }

  // extractMAX: 

  // - 'Remove' the root node, swap it with the smallest (last) element 

  // - Then do the process of 'sinking down' that element down to its proper 
  //   place by swapping with next smaller children. 

  // - You now have the heap configured to be correct again with the 
  //   next largest element as the root 
  extractMax() {

    const max = this.values[0]; // store the max to return 
    const end = this.values.pop(); // store the min to sink down 

    // need to encase in an if because given the logic when you get to the last
    // element in the heap it will pop off and re-add itself and pop off and re-add.. 
    if( this.values.length > 0) {
      this.values[0] = end; // swap end with root. now its time to sink it down.. 
      this.sinkDown(); // sink it down!
    }

    return max;
 
  }

  // helper method for extractMax()
  sinkDown() {

    let idx = 0; // will update as swap progresses down heap 
    const length = this.values.length; // code shortener
    const element = this.values[0]; // the value being sunk down, starts at root

    
    while( true ) {
      // these variables will be used to compute the next children ongoing
      // in the loop 
      let leftChildIdx = (2 * idx) + 1;
      let rightChildIdx = (2 * idx) + 2;

      // this will contain the values at those indicies 
      let leftChild, rightChild; 
      
      // will keep track of if we did any swaps. This will allow a break
      // out of the loop if the swaps stop; the value has sunk to its final place. 
      let swap = null; 
    
      // LEFT value check. 
      // if computed index in bounds on the left size
      if( leftChildIdx < length ) {

        // if so, set the left child to the value at that index 
        leftChild = this.values[leftChildIdx];

         // check if left child value is greater than element
         // if so store in temp swap variable to check against rt child
        if( leftChild > element ) {
          swap = leftChildIdx; 
        }
      }

      // RIGHT value check. 
      // check if computed index in bounds on the right size
      if( rightChildIdx < length ) {

        // if so, set the left child to the value at that index 
        rightChild = this.values[rightChildIdx];

        // logic more complicated, need to check if its the right we really
        // want to swap with as oppposed to the left (ie right is larger)
        //
        // What the condition says: if no swap yet and right child is greater than
        // element is true OR 
        // we have swapped and the right child is greater than
        // the left child, then truly the right child is greater than the left child
        // and we will swap with the right child. Since we are logical ORing one OR the other 
        // has to be true.
        if( 
            ( swap === null && rightChild > element ) ||
            ( swap !== null && rightChild > leftChild )
          ) {
            swap = rightChildIdx; 
          }
      }

      if( swap === null ) break; // we're done if its still null 

      // now do the swap 
      this.values[idx] = this.values[swap];
      this.values[swap] = element; 
      
      // update the index, and continnue along in the loop...
      idx = swap; 

    }

  }
  
}

let heap = new MaxBinaryHeap()

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap);

/*
Result heap:

[ 55, 39, 41, 18, 27, 12, 33 ]

          55
      39      41
    18  27  12  33

*/

console.log( heap.extractMax() ); // 55
console.log( heap.extractMax() ); // 41
console.log( heap.extractMax() ); // 39
console.log( heap.extractMax() ); // 33
console.log( heap.extractMax() ); // 27
console.log( heap.extractMax() ); // 18
console.log( heap.extractMax() ); // 12, last value 
console.log( heap.extractMax() ); // undefined, heap is empty
