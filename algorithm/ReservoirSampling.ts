export class Solution {
  public head: ListNode | null;
  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(k = 1): number {
    let links: ListNode | null | undefined = Object.assign({}, this.head);
    let result: Array<number> = Array(k);
    let count: number;
    for (count = 0; count < k; count++) {
      result[count] = links.val;
      links = links.next as ListNode
    }
    while (!isNoneObject(links)) {
      let i = randomNum(0, count);
      i < k && (result[i] = links.val);
      count++;
      links = links.next as ListNode
    }
    return result[0]
  }

}

export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next)
    }
}

function randomNum(min: number, max: number) {
  return min + Math.round(Math.random() * (max - min));
}

export function isNoneObject(val: any) {
  return val === undefined || val === null
}
