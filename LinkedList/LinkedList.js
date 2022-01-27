class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }
  // REMOVING FIRST ITEM FROM LIST
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }
  // ADDING NODE AT BEGINNING OF LIST
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // GET VALUE AT PARTICULAR INDEX
  get(index) {
    if (index < 0 || index > this.length) return null;
    let current = this.head;
    let count = 0;
    while (count <= index) {
      if (count === index) return current;
      current = current.next;
      count++;
    }
  }
  // UPDATE VALUE AT THAT INDEX
  set(index, val) {
    // if (index < 0 || index > this.length) return null;
    // let current = this.head;
    // let count = 0;
    // while (count <= index) {
    //   if (count === index) current.val = val;
    //   current = current.next;
    //   count++;
    // }
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.push(val);
    if (index === 0) return this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index - 1);
    let newNode = removedNode.next;
    removedNode.next = newNode.next;
    this.length--;
    return newNode;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("Unshift");
list.push("Hello");
list.push("World");
list.push("Java");
// list.pop();
// list.traverse();
// list.shift();
// list.unshift("Unshift");
// list.get(2);
// list.set(3, "Javascript");
// list.insert(2, "To");
list.remove(1);

console.log(list);
