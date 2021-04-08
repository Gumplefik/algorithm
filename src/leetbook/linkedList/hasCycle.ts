// https://leetcode-cn.com/leetbook/read/linked-list/jbex5/



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


class ListNode {
  public value: any;
  public next?: ListNode;
  constructor(value?: any, next?: ListNode) {
    this.value = value;
    this.next = next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  if (head == null) {
    return false
  }
  let f, s;
  f = s = head
  do {
    if (f?.next == null || f.next.next === null) {
      return false
    }
    f = f.next.next
    s = s?.next
  } while (f != s)
  return true
};


