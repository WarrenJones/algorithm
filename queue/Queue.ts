export default class Queue {
  count: 0;
  lowestCount: 0;
  items: { [key: string]: any } = {};
  constructor() {
    this.clear();
  }
  enqueue(item: any) {
    this.items[this.count] = item;
    this.count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ];
    this.lowestCount++;
    return result;
  }
  isEmpty() {
    return this.lowestCount === this.count;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count];
  }
  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  size() {
    return this.count - this.lowestCount;
  }
  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let result = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      result = `${result},${this.items[i]}`;
    }
    return result;
  }
}
