export default class Stack {
  private item: any[];
  constructor() {
    this.item = [];
  }
  push(items: any) {
    if (Array.isArray(items)) {
      this.item = [...items, ...this.item];
    } else {
      this.item = [items, ...this.item];
    }
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item.pop();
  }
  isEmpty() {
    return !this.item || !this.item.length;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.item[0];
  }

  clear() {
    this.item = [];
  }
  size() {
    if (this.isEmpty()) {
      return 0;
    }
    return this.item.length;
  }

  toString() {
    if (this.isEmpty()) return "";
    return this.item.reduce((accumulator, index) => {
      accumulator = accumulator + this.item[index];
    }, "");
  }
}
