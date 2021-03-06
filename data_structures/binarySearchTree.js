/* 

Binary Search Tree
-------------------
A Binary Tree is a tree where each node can have at most two children

A Binary Search Tree is a Binary Tree that stores sortable data in an ordered 
manner: 

*Less than is on the left side of a parent node, greater than is on
the right side*

*/

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
}

class BinarySearchTree {
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

  
  find(val) {

    if ( this.root === null) return false; 

    let found = false;
    let current = this.root; // current starts at root 

    // while there are nodes, and we havent found it......
    while( current && !found ) {

      if( val < current.val ) {

        current = current.left; // go to the left

      } else if ( val > current.val ) {

        current = current.right; // go to the right 

      } else {

        found = true; // found it! 
      }
    }

    // didn't find it. 
    if( !found ) return false; 

    // found it so return the node 
    return current; 

  }

  

  
}

var tree = new BinarySearchTree()

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log( tree.find(10) );

console.log( tree.find(16) );

console.log( tree.find(82) );
