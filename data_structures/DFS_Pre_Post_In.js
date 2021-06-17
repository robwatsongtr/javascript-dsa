// Trees
//
// Depth First Search: PreOrder, PostOrder, InOrder
//
/*

// ALl DFS Algos: traverse down to the end of the tree, then back up. 

// RECURSION makes the most sense for concise code, because 
// the root node makes a natural base case to work towards 

PreOrder: Node, left, Right.
Example:

             10
          6     15
        3   8     20
  
 [10, 6, 3, 8, 15, 20]

---------------------------------------------------------------

PostOrder: All chldren are explored of a node before the node itself, so its
Left, Right, then Node. 

           10
        6     15
      3   8     20

[3, 8, 6, 20, 15, 10]

---------------------------------------------------------------

InOrder: Left, Node, Right

           10
        6     15
      3   8     20

[3, 6, 8, 10, 15, 20]

-----------------------------------------------------------------
*/

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

  // push Node value into result array first ("Pre"), then visit left and right
  // of a leaf 
  DFS_PreOrder() {
    let data = [];
    
    // recursive helper function 
    function traverse( node ) {
      data.push( node.val ); // 'visit', ie record the value of the node itself
      if( node.left ) traverse( node.left );
      if( node.right ) traverse( node.right ); 
    }

    traverse( this.root ); // the actual function call
    return data; 
  }

  // Visit Left and Right then Node of a leaf
  DFS_PostOrder() {
    let data = []

    function traverse( node ) {
      if( node.left ) traverse( node.left );
      if( node.right ) traverse ( node.right );
      data.push( node.val ); // 'visit', ie record the value of the node itself
    }

    traverse( this.root ); // the actual function call
    return data; 
  }

  // Visit the Left, Node, then Right of a leaf
  DFS_InOrder() {
    let data = [];

    function traverse( node ) {
      if( node.left ) traverse( node.left );
      data.push( node.val ); // 'visit', ie record the value of the node itself
      if( node.right ) traverse( node.right );
    }

    traverse( this.root );
    return data; 
  }

}

var myTree = new BinaryTree()

/*
           10
      5        13
    2   7    11   16
*/

myTree.insert(10);
myTree.insert(5);
myTree.insert(13);
myTree.insert(11);
myTree.insert(2);
myTree.insert(16);
myTree.insert(7);

console.log( 'mytree PreOrder:', myTree.DFS_PreOrder() ); // [10, 5, 2, 7, 13, 11, 16]
console.log( 'mytree PostOrder:', myTree.DFS_PostOrder() ); // [2, 7, 5, 11, 16, 13, 10 ]
console.log( 'mytree InOrder:', myTree.DFS_InOrder() ); // [2, 5, 7, 10, 11, 13, 16]


/* example from the top of code: 

           10
        6     15
      3   8     20

*/
var myTree2 = new BinaryTree()

myTree2.insert(10);
myTree2.insert(6);
myTree2.insert(15);
myTree2.insert(3);
myTree2.insert(8);
myTree2.insert(20);

console.log( 'mytree2 PreOrder:', myTree2.DFS_PreOrder() );
console.log( 'mytree2 PostOrder:', myTree2.DFS_PostOrder() );
console.log( 'mytree2 InOrder:', myTree2.DFS_InOrder() );

