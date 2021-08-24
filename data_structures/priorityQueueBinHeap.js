/*

--Priority Queue: Common use case for a Binary Heap

A priority queue is a data structure where _each element has a priority_.
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

  enqueue() {

  }

  dequeue() {

  }


}