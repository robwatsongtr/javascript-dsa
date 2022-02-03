// Trees
//
// Breadth First Search
//
// Starting at root (at the top) you vist all the nodes on each horizontal level,
// Then all the nodes on the next horizontal level, down, etc. etc: 
/*
          10
      6       15
    3   8       20

  BFS: [10, 6, 15, 3, 8, 20]
*/

// Queue will be used, model a queue with an array, use PUSH/ENQUEUE to add at 
// the end and SHIFT/DEQUEUE to remove from the beginng.

// The queue is used to store the total nodes for each horzontal level

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
}

class BinaryTree {
  constructor() {
    this.root = null; 
  }

  // INSERT
  insert(val) {

    let newNode = new Node(val);

    // edge case of empty tree, make a root node and be done 
    if( this.root === null ) {
      this.root = newNode;
      return this; 
    }  

    let current = this.root; // start searching for spot to insert at the root 

    while(true) {
      if( val === current.val ) return undefined; // break loop if duplicate exists
      if( val < current.val ) {
        // if no more nodes on the left, make a new node there 
        if( current.left === null ) {
           current.left = newNode; 
          return this; 
        } else {
          current = current.left; // else move down the on left 
        } 
      } else if ( val > current.val ) {
        // if no more nodes on the right, make a new node there 
        if( current.right === null ) {
          current.right = newNode;
          return this;
        } else {
          current = current.right; // else move down tree on right 
        }
      }
    }  

  }

  // breadth first search, using a queue to store visited nodes 
  BFS() {

    let data = []; // will return this at the end 
    let queue = []; // store visited nodes in queue
    let atNode = this.root; // atNnode is current position in the tree 

    queue.push(atNode); // enqueue the root into the queue 
    
    // while there's anything in the queue, dequeue from the queue
    while( queue.length ) {
      atNode = queue.shift(); // take a node/value out of the queue
      data.push(atNode.val); // push it into the return array 
      if(atNode.left) queue.push(atNode.left); // if there's a left put it in the queue
      if(atNode.right) queue.push(atNode.right); // if there's a right put it in the queue
    }
    return data; 
  }
}

var myTree = new BinaryTree()

myTree.insert(10);
myTree.insert(5);
myTree.insert(13);
myTree.insert(11);
myTree.insert(2);
myTree.insert(16);
myTree.insert(7);

console.log( myTree.BFS() ); // [10, 5, 13, 2, 7, 11, 16]

