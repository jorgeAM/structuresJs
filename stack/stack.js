const Node = require("./node");

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (!this.first) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
    this.length++;

    return this.length;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
      this.length = 0;

      return current;
    }

    let pre;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    pre.next = null;
    this.last = pre;
    this.length--;

    return current;
  }
}

const stack = new Stack();

stack.push(1);
