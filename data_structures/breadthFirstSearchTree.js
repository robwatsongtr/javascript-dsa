// Trees
//
// Breadth First Search
//
// Starting at root you vist all the nodes on each horizontal level,
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

  // iterative, non recursive insert: 
  insert(val) {
    let newNode = new Node(val);

    // edge case of empty tree, make a root node and be done 
    if( this.root === null ) {
      this.root = newNode;
      return this; 
    }  

    let current = this.root; // start searching for spot at the root 

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

  // breadth first search, using queue to store visited nodes 
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;  

    queue.push(node); // enqueue the root into the queue 
    
    // while there's anything in the queue, dequeue from the queue
    while( queue.length ) {
      node = queue.shift();
      data.push(node);

    }


  }

  
}

var tree = new BinaryTree()

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log( BFS() ); 

