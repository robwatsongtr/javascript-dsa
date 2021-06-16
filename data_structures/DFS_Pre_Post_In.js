// Trees
//
// Depth First Search: PreOrder, PostOrder, InOrder
//
/*

PreOrder: Starting at root, visit a node itself, then the left, then right. 
Node, left, Right.
Example:

             10
          6     15
        3   8     20
  
 [10, 6, 3, 8, 15, 20]

---------------------------------------------------------------

PostOrder: All chldren are explored of a node before the node itself, so its
Left, Right, then Node. 




---------------------------------------------------------------

InOrder: Left, Node, Right




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
  DFS_PreOrder() {
    let data = [];
    
    // recursive helper function 
    function traverse( node ) {
      data.push( node.val ); // push the value of the node into data array 
      if( node.left ) traverse( node.left );
      if( node.right ) traverse( node.right ); 
    }

    traverse( this.root ); // the actual function call
    return data; 
  }

  // Visit Left and Right then Node, THEN put results into array ("Post")
  DFS_PostOrder() {
    let data = []

    function traverse( node ) {
      if( node.left ) traverse( node.left );
      if( node.right ) traverse ( node.right );
      data.push( node.val );
    }

    traverse( this.root ); // the actual function call
    return data; 
  }

  // Visit the Left, Node, then Right, put results in to array ("In")
  DFS_InOrder() {
    let data = [];

    function traverse( node ) {
      if( node.left ) traverse( node.left );
      data.push( node.val );
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



console.log( myTree.DFS_PreOrder() ); // [10, 5, 2, 7, 13, 11, 16]
console.log( myTree.DFS_PostOrder() ); // [2, 7, 5, 11, 16, 13, 10 ]
console.log( myTree.DFS_InOrder() ); // [2, 5, 7, 10, 11, 13, 16]
