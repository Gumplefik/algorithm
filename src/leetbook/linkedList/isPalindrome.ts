// https://leetcode-cn.com/leetbook/read/linked-list/fov6t/


import {
  computeLength,
  linkedListToArray,
  ListNode, reverseLinkedList
} from './common'



export function isPalindrome(head: ListNode | null): boolean {
  let temp = linkedListToArray(head)
  let l = temp.length, r = l / 2
  for (let i=0; i < r; i++) {
    if (temp[i] !== temp[l-1-i]) {
      return false
    }
  }
  return true
};

export function isPalindrome2(head: ListNode | null): boolean {
  if (head == null || head.next == null) {
    return true
  }
  let r = head
  let l = computeLength(r) / 2

  let slow: ListNode | null= r, fast: ListNode | null = r
  while(l > 0) {
    l--
    fast = fast?.next || null
  }

  let t = reverseLinkedList(fast)

  while(slow && t) {
    if (slow.val !== t.val) {
      return false
    }
    slow = slow.next
    t = t.next
  }
  return true
};
