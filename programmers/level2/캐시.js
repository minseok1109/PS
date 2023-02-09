function solution(cacheSize, cities) {
  class Node {
    constructor(data, prev = null, next = null) {
      this.data = data;
      this.prev = prev;
      this.next = next;
    }
  }

  class DLL {
    static time = 0;
    constructor(cacheSize) {
      this.cacheSize = cacheSize;
      this.head = new Node("");
      this.tail = new Node("");
      this.head.next = this.tail;
      this.tail.prev = this.head;
    }
    LRU(data) {
      let node = this.head.next;
      while (node.data) {
        if (node.data === data) {
          this.cacheHit(node, data);
          return;
        }
        node = node.next;
      }
      this.cacheMiss(data);
    }

    cacheHit(node, data) {
      DLL.time += 1;
      this.removeNode(node);
      this.addFront(data);
    }

    removeNode(node) {
      [node.prev.next, node.next.prev] = [node.next, node.prev];
    }

    addFront(data) {
      let newNode = new Node(data);
      this.head.next.prev = newNode;
      newNode.next = this.head.next;
      this.head.next = newNode;
      newNode.prev = this.head;
    }

    cacheMiss(data) {
      DLL.time += 5;
      this.addFront(data);
      if (this.totalLen() > this.cacheSize) {
        this.removeTail();
      }
    }
    totalLen() {
      let count = 0;
      let node = this.head.next;
      while (node.data) {
        count += 1;
        node = node.next;
      }
      return count;
    }

    removeTail() {
      this.tail.prev.prev.next = this.tail;
      this.tail.prev = this.tail.prev.prev;
    }
    result() {
      return DLL.time;
    }
  }

  let test = new DLL(cacheSize);

  for (const city of cities) {
    test.LRU(city.toLowerCase());
  }
  return test.result();
}

module.exports = solution;
