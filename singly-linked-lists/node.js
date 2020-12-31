class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.tail) {
      this.tail.next = node;
    }

    this.tail = node;
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) {
      return undefined;
    }

    let current = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return current;
    }

    let pre;

    while (current.next) {
      pre = current;
      current = current.next;
    }

    pre.next = null;
    this.tail = pre;
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let head = this.head;

    if (!head.next) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return head;
    }

    this.head = head.next;
    this.length--;

    return head;
  }

  unshift(value) {
    const node = new Node(value);
    const head = this.head;
    node.next = head;
    this.head = node;

    if (this.length === 0) {
      this.tail = node;
    }

    this.length++;

    return this;
  }

  get(index) {
    const size = this.length;

    if (index < 0 || size <= index) {
      return null;
    }

    let node = this.head;
    let counter = 0;

    while (counter !== index) {
      node = node.next;
      counter++;
    }

    return node;
  }

  set(value, index) {
    const node = this.get(index);

    if (!node) {
      return false;
    }

    node.value = value;

    return true;
  }

  insert(value, index) {
    const size = this.length;

    if (index < 0 || size <= index) {
      return false;
    }

    if (index === size) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    const node = this.get(index - 1);
    const nextNode = node.next;
    const newNode = new Node(value);

    node.next = newNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(index) {
    const size = this.length;

    if (index < 0 || size <= index) {
      return undefined;
    }

    if (index === size - 1) {
      return this.pop();
    }

    if (index === 0) {
      return this.shift();
    }

    const node = this.get(index - 1);
    const deletedNode = node.next;
    const newNextNode = deletedNode.next;

    node.next = newNextNode;
    this.length--;

    return deletedNode;
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(3);
list.push(4);
list.push(6);
list.get(2);
list.insert(99, 1);
