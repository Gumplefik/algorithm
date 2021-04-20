// https://leetcode-cn.com/leetbook/read/linked-list/fdi26/


class Nodes {
  val: number
  next: Nodes | null
  random: Nodes | null
  constructor(val?: number, prev? : Nodes, next? : Nodes, random? : Nodes) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
    this.random = (random===undefined ? null : random);
  }
}

export function copyRandomList(head: Nodes | null): Nodes | null {
  let m = new Map();
  let r = head
  while(r != null) {
    m.set(r, new Nodes(r.val))
    r = r.next
  }
  r = head
  while(r != null) {
    m.get(r).next = m.get(r.next) || null
    m.get(r).random = m.get(r.random) || null
    r = r.next
  }
  return m.get(head)
};


