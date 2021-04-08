// https://leetcode-cn.com/leetbook/read/linked-list/jy291/


class LinkNode {
  public value: any;
  public next?: LinkNode;
  public prev?: LinkNode;
  constructor(value?: any, prev?: LinkNode, next?: LinkNode) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

export class MyLinkedList {
  public head?: LinkNode;
  private length = 0;
  constructor() {
  }


  get(index: number): number {
    if (this.length <= index) {
      return -1
    }
    let node = this.head
    while (node?.next && index > 0) {
      node = node.next
      index--
    }
    return node?.value
  }

  addAtHead(val: number): void {
    let node = new LinkNode(val)
    node.next = this.head
    this.head && (this.head.prev = node)
    this.head = node
    this.length++
  }

  addAtTail(val: number): void {
    let node = this.head
    while(node?.next) {
      node = node.next
    }
    if (!node) {
      this.head = new LinkNode(val)
    } else {
      let n = new LinkNode(val, node)
      node.next = n
    }
    this.length++
  }

  addAtIndex(index: number, val: number): void {
    if (this.length < index) {
      return
    }
    if (this.length === index) {
      this.addAtTail(val)
      return
    }
    let node = this.head
    while(node?.next && index > 0) {
      node = node.next
      index--
    }
    let n = new LinkNode(val)
    if (!node) {
      this.head = n
    } else {
      let prev = node.prev
      if (prev) {
        prev.next = n
        n.prev = prev
      } else {
        this.head = n
      }
      node.prev = n
      n.next = node
    }
    this.length++
  }

  deleteAtIndex(index: number): void {
    if (this.length <= index) {
      return
    }
    let node = this.head
    while (node?.next && index > 0) {
      node = node.next
      index--
    }
    if (node) {
      let prev = node.prev
      let next = node.next
      if (prev) {
        prev.next = next
      } else {
        this.head = next
      }
      next && (next.prev = prev)
    }
    this.length--
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
