// https://leetcode-cn.com/leetbook/read/queue-stack/kzlb5/


export class MyCircularQueue {
  private queue: any[]
  private head = 0
  private footer = 0

  constructor(k: number) {
    this.queue = new Array(k)
  }

  get size() {
    return this.queue.length
  }


  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    }
    this.queue[this.footer % this.size] = value
    this.footer++
    return true
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    }
    this.queue[this.footer % this.size] = undefined
    this.footer--
    return true
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.head % this.size]
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    }
    return this.queue[this.footer % this.size]
  }

  isEmpty(): boolean {
    return this.head === this.footer
  }

  isFull(): boolean {
    return Math.abs(this.head - this.footer) === this.size
  }
}
