// https://leetcode-cn.com/leetbook/read/linked-list/fnzd1/

import {
  ListNode
} from './common'


export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let res: ListNode | null = null, head: ListNode | null = null
  // 合并短的一段
  while(l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      if (res == null) {
        head = res = l1
      } else {
        res.next = l1
        res = res.next
      }
      l1 = l1.next
    } else {
      if (res == null) {
        head = res = l2
      } else {
        res.next = l2
        res = res.next
      }
      l2 = l2.next
    }
  }
  // 合并剩余的一段
  let concat = l1 != null ? l1 : l2
  if (res == null) {
    head = concat
  } else {
    res.next = concat
  }
  return head
};
