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
   

*/

class MaxBinaryHeap {
  constructor(value) {
    this.values = []
  }

  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[idx];

    while( index > 0 ) {
      let parentIdx = Math.floor( (index-1) / 2);
      let parent = this.values[parentIdx]; 

      if( element <= parent ) break; // the vaule has found its final position 

      // otherwise, swap
      this.values[parentIdx] = element; 
      this.values[idx] = parent; 

      // and update index to be parent
      idx = parentIdx;
  
    }

  }

  insert(element) {
    this.values.push(element); // push to end of array
    this.bubbleUp(); // finds the right place for the value. 
  }

}
