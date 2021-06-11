
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
    let node = new Node(val);
    this.root = insertNode(this.root, node);
  }

  insertNode(root, node) {
    if (root == null) {
    return node;
  }
    if (node.val == root.val) {
    return root;
  } else if (node.val < root.val) {
    root.left = insertNode(root.left, node);
  } else {
    root.right = insertNode(root.right, node);
  }
    return root;
  }
}