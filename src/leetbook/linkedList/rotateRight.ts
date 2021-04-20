// https://leetcode-cn.com/leetbook/read/linked-list/f00a2/


import {
  computeLength,
  ListNode
} from './common'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  let len = computeLength(head)
  let sub = k % len
  // 这里处理长度小于等于1或者右移后等于没有移动的情况
  if (len <= 1 || sub === 0 || head == null) {
    return head
  }
  len--
  let slow: ListNode | null= head, fast: ListNode | null = head.next
  while(sub < len && slow && fast) {
    slow = slow.next
    fast = fast.next
    sub++
  }
  if (slow != null) {
    slow.next = null
  }
  if (fast != null) {
    let r = fast
    while(r.next) {
      r = r.next
    }
    r.next = head
    return fast
  }
  return null
};
