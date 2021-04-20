// https://leetcode-cn.com/leetbook/read/linked-list/jjbj2/




import {
  ListNode
} from './common'


// 也是类似快慢指针，但是这里是通过填充路径的模式来实现，
// 两个链表，同样长度走到终点没有相同的就是null
// 不等长的两个链表，要互补过去，短的后面填充长的，长的后面填充短的，
// 短链表每次走到末尾会快进（长链表长度-短链表长度）的步数
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA == null || headB == null) {
    return null
  }
  let a: ListNode | null = headA, b: ListNode | null = headB
  while (a !== b) {
    a = a.next
    b = b.next
    if (a == null && b == null) {
      return null
    }
    if (a == null) {
      a = headB
    }
    if (b == null) {
      b = headA
    }
  }
  return a
};
