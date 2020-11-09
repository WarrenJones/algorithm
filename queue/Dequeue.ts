export default class Deque {
  data: Array<any> = [];
  constructor(data: Array<any> = []) {
    if (Array.isArray(data)) {
      this.data = data;
    }
  }
  isEmpty() {
    return this.data.length === 0;
  }
  clear() {
    this.data = [];
  }
  size() {
    return this.data.length;
  }
  toString() {
    return this.data.reduce((result, item) => {
      return result + item;
    }, "");
  }
  addFront(item: any) {
    this.data.unshift(item);
  }
  addBack(item: any) {
    this.data.push(item);
  }
  removeFront() {
    return this.data.shift();
  }
  removeBack() {
    return this.data.pop();
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[0];
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.data[this.data.length - 1];
  }
}
