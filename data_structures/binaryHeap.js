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
    this.array = []
  }


  // Insert an element, will result in a proper binary heap and the element
  // finding its right place 
  insert(element) {
    this.array.push(element); // push to end of array
    this.bubbleUp(); // finds the right place for the value. 
  }
  
  // helper method for insert: 
  bubbleUp() {
    let idx = this.array.length - 1; // find index of the end of the array
    const element = this.array[idx]; // set element to that index 

    // while condition necessary so that we don't go to negative indicies
    while( idx > 0 ) {
      let parentIdx = Math.floor( (idx-1) / 2); // calculation to find parent
      let parent = this.array[parentIdx]; // the current parent in the array 

      if( element <= parent ) break; // the vaule has found its final position 

      // otherwise, swap
      this.array[parentIdx] = element; // swap element to parent 
      this.array[idx] = parent; // swap parent to element 

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