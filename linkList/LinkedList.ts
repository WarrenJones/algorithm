import { Node } from "./Model";
export default class LinkedList {
  head: Node;
  count: 0;

  push(element: any) {
    const node = new Node(element);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index: number) {
    if (index < 0 || index > this.count - 1) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current;
  }
  indexOf(element: any) {
    let current = this.head;
    for (let i = 0; i < this.count && current; i++) {
      if (Object.is(current.element, element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }
  removeAt(index: number) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        let previous;
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  remove(element: Node) {
    const toRemoveIndex = this.indexOf(element);
    return this.removeAt(toRemoveIndex);
  }
  isEmpty() {
    return this.count === 0;
  }
  size() {
    return this.count;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let current = this.head;
    let result = current.element;
    while (current.next) {
      current = current.next;
      result = result + `,${current.element}`;
    }
    return result;
  }
}
