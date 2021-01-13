const Node = require("./node");

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.last) {
      this.last = node;
    }

    if (this.first) {
      node.next = this.first;
    }

    this.first = node;
    this.length++;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    const first = this.first;
    this.first = first.next;

    if (this.length === 1) {
      this.last = null;
    }

    this.length--;

    return first;
  }
}

const queue = new Queue();

queue.push(1);
