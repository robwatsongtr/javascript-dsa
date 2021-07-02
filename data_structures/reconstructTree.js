// robert's problem 

// Write a function that, given two arrays representing the inorder and preorder walks of a 
// non-balanced binary tree, reconstructs the tree.

/*
           5
         /   \
        3     8
       / \     \
      1   4    10

      Preorder = [5,3,1,4,8,10] : has the tree structure baked in to it
      Inorder  = [1,3,4,5,8,10]


      Rob's notes:
      take the Preorder array, first sub of array is root,
      then iterate so next subs are left children and be used as such. 

      Question is though, at what point in the preorder array do we know 
      we've reached the end of the left children line and then can go up
      the right children line? 

      I'm surmising that's what we use the Inorder array for. 

*/

/* 

Output: 

node reconstructTree.js 
Node {
  val: 5,
  left: Node {
    val: 3,
    left: Node { val: 1, left: null, right: null },
    right: Node { val: 4, left: null, right: null }
  },
  right: Node {
    val: 8,
    left: null,
    right: Node { val: 10, left: null, right: null }
  }
} 

*/


class Node {
  constructor(val) {
      this.val = val
      this.left = null
      this.right = null
  }
}

function reconstructTree(preorder, inorder) {
  return new Node(0)
}


