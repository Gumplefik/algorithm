// https://leetcode-cn.com/leetbook/read/linked-list/jf1cc/



import {
  ListNode
} from './common'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let slow = head, fast = head, count = 0
  while(fast != null && fast.next != null && count !== n) {
    fast = fast.next
    count++
  }
  // 长度不够的情况
  if (count < n -1) {
    return null
  }
  // 刚好要删除头结点的时候
  if (count === n-1) {
    return head ? head.next : null
  }
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  if (slow != null) {
    slow.next = slow.next? slow.next.next : null
  }
  return head
};


function removeNthFromEnd2(head: ListNode | null, n: number): ListNode | null {
  let slow = head, fast = head
  while(fast != null && fast.next != null && n > 0) {
    fast = fast.next
    n--
  }
  // 长度不够的情况
  if (n > 1) {
    return null
  }
  // 刚好要删除头结点的时候
  if (n === 1) {
    return head ? head.next : null
  }
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  if (slow != null) {
    slow.next = slow.next? slow.next.next : null
  }
  return head
};


