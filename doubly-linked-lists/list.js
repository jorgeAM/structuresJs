const Node = require("./node");

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;

      return this;
    }

    const prev = this.tail;
    prev.next = node;
    node.prev = prev;
    this.tail = node;

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    const tail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return tail;
    }

    this.tail = tail.prev;
    this.tail.next = null;
    this.length--;

    return tail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    const head = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;

      return head;
    }

    this.head = head.next;
    this.head.prev = null;
    head.next = null;
    this.length--;

    return head;
  }

  unshift(value) {
    if (!this.head) {
      return this.push(value);
    }

    const node = new Node(value);
    this.head.prev = node;
    node.next = this.head;
    this.head = node;
    this.length++;

    return this;
  }

  get(index) {
    const size = this.length;

    if (index < 0 || size <= index) {
      return null;
    }

    const middle = Math.floor(size / 2);
    let node;
    let counter = 0;

    if (index <= middle) {
      node = this.head;
      while (counter !== index) {
        node = node.next;
        counter++;
      }

      return node;
    }

    node = this.tail;
    counter = size - 1;
    while (counter !== index) {
      node = node.prev;
      counter--;
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

    if (index < 0 || size < index) {
      return null;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    if (index === size) {
      this.push(value);
      return true;
    }

    const node = this.get(index - 1);
    const nextNode = node.next;
    const newNode = new Node(value);
    newNode.prev = node;
    newNode.next = nextNode;
    node.next = newNode;
    nextNode.prev = newNode;
    this.length++;

    return true;
  }

  remove(index) {
    const size = this.length;

    if (index < 0 || size <= index) {
      return undefined;
    }

    if (index === 0) {
      return this.shift();
    }

    if (index === size - 1) {
      return this.pop();
    }

    const node = this.get(index);
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;

    this.length--;

    return node;
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
