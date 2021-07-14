// solution courtesy of Robert Diamond 

/*
           5
         /   \
        3     8
       / \     \
      1   4    10

      Preorder = [5,3,1,4,8,10]
      Inorder  = [1,3,4,5,8,10]
*/

Preorder = [5, 3, 1, 4, 8, 10]
Inorder = [1, 3, 4, 5, 8, 10]

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

function reconstructTree(preorder, inorder) {
    if (!Array.isArray(preorder) ||
        !Array.isArray(inorder) ||
        preorder.length != inorder.length ||
        preorder.length == 0) {
        return null;
    }
    let root = new Node(preorder[0]);
    let split = inorder.indexOf(preorder[0]);
    if (split == -1) { return root }
    root.left = reconstructTree(preorder.slice(1, split + 1), inorder.slice(0, split))
    root.right = reconstructTree(preorder.slice(split + 1), inorder.slice(split + 1))
    return root
}

console.log(reconstructTree(Preorder, Inorder))