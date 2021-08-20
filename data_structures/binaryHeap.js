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

Binary Heap is modeled in an array, essentally. 

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
    const end = this.values.pop(); // pop off the end

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

    let idx = 0; 
    const length = this.values.length;
    const element = this.values[0];

    while( true ) {

      let leftChildIndex = (2 * idx) + 1;
      let rightChildIndex = (2 * idx) + 2;

      let leftChild, rightChild; 

      let swap = null; 
    
      // check if computed index in bounds on the left size
      if( leftChildIndex < length ) {

        // if so, set the left child to the value at that index 
        leftChild = this.values[leftChildIdx];

         // check if left child value is greater, if so store in temp swap variable
        if( leftChild > element ) {
          swap = leftChildIdx; 
        }
      }

      // check if computed index in bounds on the right size
      if( rightChildIndex < length ) {

        // if so, set the left child to the value at that index 
        rightChild = this.values[rightChildIndex];

        // logic more complicated, need to check if its the right we really
        // want to swap with as oppposed to the left (ie right is larger)
        if( 
            ( swap === null && rightChild > element ) ||
            ( swap !== null && rightChild > leftchild )
          ) {
            swap = rightChildIndex; 
          }
      }

      if( swap === null ) break; // we're done if its still null 

      // now do the swap and update things 
      this.values[idx] = this.values[swap];
      this.values[swap] = element; 
      idx = swap; 

    }

    // Priority Queue

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