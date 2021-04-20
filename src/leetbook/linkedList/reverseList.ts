// https://leetcode-cn.com/leetbook/read/linked-list/f58sg/

import {
  ListNode
} from './common'

export function reverseList(head: ListNode | null): ListNode | null {
  let res = head;
  if (res == null || head == null) {
    return null
  }
  head = head.next
  res.next = null
  while(head) {
    let temp = head
    head = head.next
    temp.next = res
    res = temp
  }
  return res
};
