// https://leetcode-cn.com/leetbook/read/queue-stack/kzlb5/


export class MyCircularQueue {
  private queue: any[];
  private size: number;

  constructor(k: number) {
    this.queue = []
    this.size = k
  }

  get length() {
    return this.queue.length
  }

  isFull() {
    return this.size === this.length
  }
  
  isEmpty() {
    return this.length === 0
  }


  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.queue[this.length] = value
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.queue = this.queue.slice(1, this.length)
    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[0]
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.length - 1]
  }

}



export class MyCircularQueue2 {
  private queue: any[];
  private size: number;
  private tail: number;
  private head: number;

  constructor(k: number) {
    this.queue = new Array(k)
    this.head = -1
    this.tail = -1
    this.size = k
  }


  isFull() {
    return (this.tail + 1) % this.size === this.head
  }

  isEmpty() {
    return this.head === -1
  }


  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    if (this.isEmpty()) {
      this.head = 0
    }
    // 始终右移一位填充元素
    this.tail = (this.tail + 1) % this.size
    this.queue[this.tail] = value
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    // 就一个元素的场景
    if (this.head === this.tail) {
      this.head = this.tail = -1
      return true
    }
    this.head = (this.head + 1) % this.size
    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.head]
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.tail]
  }

}
