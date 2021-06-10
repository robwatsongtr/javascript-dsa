// QUEUE
// First In First Out
//
// Enqueue: Add, Dequeue: Remove
// Add/Enqueue to the end(last), Remove/Dequeue from the beginning(first)
// 
// In other words, the queue moves from the end to the beginning as its
// O(1) to do so, but the other direction isn't. 

class Node {
  constructor(val) {
    this.value = val;
    this.next = null; 
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // same as singly linked list Push 
  enqueue(val) {
    let newNode = new Node(val);

    if( !this.first ) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode; // wires it up
      this.last = newNode; // transfers the data 
    }
    ++this.size;
    return this.size; 

  }

  // same as stack pop 
  dequeue() {
    if( !this.first ) return null;
    let temp = this.first; // grab the top/first value right now 

    // if there's only one node, last gets nulled 
    if( this.first === this.last) {
      this.last = null; 
    }

    // the first property is reset to beceome the next property,
    // effectively making the old first go bye bye, and the 
    // 'old first', or the popped value, gets returned as the temp variable 
    this.first = this.first.next
    
    this.size--;
    return temp.value; 
  }

}

let q = new Queue();

console.log( q.enqueue("First") );
console.log( q.enqueue("Second") );
console.log( q.enqueue("Third") );

console.log( q.dequeue() );
console.log( q.dequeue() );
console.log( q.dequeue() );
console.log( q.dequeue() );