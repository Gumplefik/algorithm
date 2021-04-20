

export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

type T = ListNode | null


export function linkedListToArray(l: T) {
  let res = [], r = l;
  while(r) {
    res.push(r.val)
    r = r.next
  }
  return res
}



export function createLinkedList(vals: any[]) {
  if (vals.length === 0) {
    return null
  }
  let res: T, head: T = null
  vals.forEach(v => {
    v = new ListNode(v)
    if (res != null) {
      res.next = v
      res = v
    } else {
      res = head = v
    }
  })
  return head
}

export function computeLength(head: T): number {
  let res = 0
  while(head) {
    res++
    head = head.next
  }
  return res
}


export function reverseLinkedList(head: T): T {
  let res: T = null
  while(head) {
    let temp = head
    head = head.next
    temp.next = res
    res = temp
  }
  return res
}
