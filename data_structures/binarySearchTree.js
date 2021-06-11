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

  insert(val) {
    let newNode = new Node(val);

    if( this.root === null ) {
      this.root = newNode;
      return this; 
    }  

    let current = this.root;

    while(true) {

      if( val === current.val ) return undefined; // check for duplicates

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

  
}

var tree = new BinarySearchTree()

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);


// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
