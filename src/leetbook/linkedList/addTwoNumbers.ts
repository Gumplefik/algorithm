// https://leetcode-cn.com/leetbook/read/linked-list/fv6w7/


import {
  computeLength,
  ListNode
} from './common'

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let res: ListNode | null = null, head: ListNode | null = null, cache = 0
  while(l1 != null || l2 != null || cache !== 0) {
    let x = 0, y = 0
    if (l1 != null) {
      x = l1.val
      l1 = l1.next
    }
    if (l2 != null) {
      y = l2.val
      l2 = l2.next
    }
    let temp = x + y + cache
    if (temp >= 10) {
      cache = 1
      temp = temp - 10
    } else {
      cache = 0
    }
    let node = new ListNode(temp)
    if (head == null || res == null) {
      head = res = node
    } else {
      res.next = node
      res = res.next
    }
  }
  return head
};
