import LinkedList from "./LinkedList";
import { DoublyNode } from "./Model";
export class DoublyLinkedList extends LinkedList {
  tail: DoublyNode;
  constructor() {
    super();
    this.tail = undefined;
  }
  insert(element: any, index: number) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head as DoublyNode;
      if (index === 0) {
        if (this.head === null) {
          node.next = current;
          this.tail = node;
          this.head = node;
        }
        current.pre = node;
      } else if (index === this.count) {
        current = this.tail;
        current.next = node;
        node.pre = current;
        this.tail = node;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next as DoublyNode;
        previous.next = node;
        node.pre = previous;
        node.next = current;
        current.pre = node;
      }
      this.count++;
      return true;
    }
    return false;
  }
  removeAt(index: number) {
    if (index >= 0 && index <= this.count - 1) {
      let result: DoublyNode;
      if (index === 0) {
        if (!this.head) {
          return undefined;
        }
        result = this.head as DoublyNode;
        if (this.count > 1) {
          let current = this.head.next as DoublyNode;
          current.pre = undefined;
          this.head = current;
        }else{
            this.head = undefined;
            this.tail = undefined
        }
      } else if (index === this.count - 1) {
        result = this.tail as DoublyNode;
        let current = this.tail.pre as DoublyNode;
        current.next = undefined;
        this.tail = current;
      } else {
        let previous = this.getElementAt(index - 1) as DoublyNode;
        let current = previous.next as DoublyNode;
        result = previous.next as DoublyNode;
        previous.next = current.next;
        (current.next as DoublyNode).pre = previous;
      }

      this.count--;
      return result.element;
    }
    return undefined;
  }
}
