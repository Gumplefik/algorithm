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


class ListNode {
  public value: any;
  public next?: ListNode;
  constructor(value?: any, next?: ListNode) {
    this.value = value;
    this.next = next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {

};
