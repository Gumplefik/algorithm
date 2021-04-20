// https://leetcode-cn.com/leetbook/read/linked-list/f9izv/


import {
  ListNode
} from './common'


export function removeElements(head: ListNode | null, val: number): ListNode | null {
  let res = head
  while(head) {
    // 头部删除就一起右移
    if (head.val === val && res === head) {
      res = head = head.next
      continue
    }
    // 中间删除就直接删除，这里注意最后一位结点要删除时是在前一个结点删除的
    if (head.next && head.next.val === val) {
      head.next = head.next.next
    } else {
      head = head.next
    }
  }
  return res
};
