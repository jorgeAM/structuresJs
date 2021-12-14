const Node = require("./node");

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;

      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = node;

          return this;
        }
      } else {
        if (current.right) {
          current = current.right;
        } else {
          current.right = node;

          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) {
      return false;
    }

    let current = this.root;

    while (true) {
      if (current.value === value) {
        return true;
      }

      if (current.value > value) {
        if (current.left) {
          current = current.left;
        } else return false;
      } else {
        if (current.right) {
          current = current.right;
        } else return false;
      }
    }
  }
}

const tree = new BinarySearchTree();
