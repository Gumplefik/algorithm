// https://leetcode-cn.com/leetbook/read/linked-list/jjhf6/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */



import {
  ListNode
} from './common'

function detectCycle(head: ListNode | null): ListNode | null {
  let slow: ListNode | null | undefined = head, fast: ListNode | null | undefined = head
  while(slow != null && fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) break;
  }

  // 这个情况说明fast已经走到尽头了
  if (fast == null || fast.next == null) {
    return null
  }
  //下面开始找环的入口节点
  //刚才的循环 慢指针走了a + b (a是从开始到入口节点) 假设等于cnt
  //          快指针走了 a + b + c + b (b + c = 环)，应该等于2 * cnt
  //推导出 a = c，所以把慢指针再放到头节点，下一次快慢指针相遇的节点即环的入口节点
  slow = head
  while(slow != null && fast != null) {
    // 先判断相等是因为有可能大家刚好在圈的起点
    if (slow === fast) break;
    slow = slow.next
    fast = fast.next
  }
  return slow as ListNode
};



