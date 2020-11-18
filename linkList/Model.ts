export class Node {
  element: any;
  next: Node = undefined;
  constructor(element: any, next: Node) {
    this.element = element;
    this.next = next;
  }
}

export class DoublyNode extends Node {
  pre: any = undefined;
  constructor(element: any, next: DoublyNode = undefined, pre: DoublyNode= undefined) {
    super(element, next);
    this.pre = pre;
  }
}
