class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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
      this.head.prev = null;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      //   this.tail.prev = null;
    }

    this.length--;
    // return this.tail;
  }
  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unShift(val) {
    let newHead = new Node(val);

    if (this.length === 0) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let count, current;

    if (idx < this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }
  set(idx, val) {
    const node = this.get(idx);
    if (node != null) {
      node.val = val;
      return true;
    }
    return false;
  }
}

const list = new DoublyLinkedList();

list.push(50);
list.push(75);
list.push(100);
list.push(125);
list.push(150);

// list.pop();
// list.shift();
// list.unShift(25);
// list.get(1)
list.set(1, 80);

console.log(list);
