class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      newNode.next = temp;
    }
    return ++this.size;
  }
  pop() {
    let poppedValue = this.first.value;
    let newList = this.first.next;
    this.first = newList;
    this.size--;
    return poppedValue;
  }
}

const stack = new Stack();

stack.push(5);
stack.push(10);
stack.push(15);
stack.push(20);

stack.pop();

console.log(stack);
