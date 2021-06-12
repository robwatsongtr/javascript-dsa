
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    this.root = insertNode(this.root, newNode);
  }

  insertNode(root, newNode) {
    if (root == null) {
    return newNode;
  }
    if (newNode.val == root.val) {
    return root;
  } else if (newNode.val < root.val) {
    root.left = insertNode(root.left, newNode);
  } else {
    root.right = insertNode(root.right, newNode);
  }
    return root;
  }
}