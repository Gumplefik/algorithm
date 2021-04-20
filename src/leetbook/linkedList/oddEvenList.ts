// https://leetcode-cn.com/leetbook/read/linked-list/fe0kj/


import {
  ListNode
} from './common'


// 双指针
// x,y分别指向 x+1, y + 1
// 然后 x = x+1, y = y+1
// 整个过程中 y = x+1

export function oddEvenList(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) {
    return head
  }

  let h1, h2, x, y
  h1 = x = head
  h2 = y = head.next
  while (x != null && x.next != null && y != null && y.next != null) {
    let temp: ListNode | null= y.next, cache: ListNode | null = null
    if (temp != null) {
      cache = temp.next
    }

    // 当前奇链表节点的下一个节点是当前偶链表节点的下一个节点
    x.next = temp
    // 当前偶链表的下一个节点是当前偶链表节点的下下一个节点
    y.next = cache

    x = x.next
    y = y.next
  }

  x.next = h2
  return h1
};

