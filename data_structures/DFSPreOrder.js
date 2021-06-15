// Trees
//
// Depth First Search Pre Order 
//


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

  
  DFS_PreOrder() {



    
    
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

console.log( myTree.DFS_PreOrder() ); // 
