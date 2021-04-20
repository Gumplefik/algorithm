// https://leetcode-cn.com/leetbook/read/linked-list/fw8v5/

// 深度优先遍历链表


class Nodes {
  val: number
  prev: Nodes | null
  next: Nodes | null
  child: Nodes | null
  constructor(val?: number, prev? : Nodes, next? : Nodes, child? : Nodes) {
      this.val = (val===undefined ? 0 : val);
      this.prev = (prev===undefined ? null : prev);
      this.next = (next===undefined ? null : next);
      this.child = (child===undefined ? null : child);
  }
}

let temp: Nodes

function flatten(head: Nodes | null): Nodes | null {
  temp = new Nodes(0)
  dfs(head)
  if (head != null) {
    head.prev = null
  }
  return head
};

function dfs(root: Nodes | null) {
  if (root == null) {
    return
  }
  let left = root.child
  let  right = root.next
  temp.next = root
  root.prev = temp
  temp = root
  dfs(left)
  root.child = null
  dfs(right)
}


