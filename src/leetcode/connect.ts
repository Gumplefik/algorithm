// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/


class Node {
  val: number
  left: Node | null
  right: Node | null
  next: Node | null

  constructor(val?: number, left?: Node, right?: Node, next?: Node) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
    this.next = (next === undefined ? null : next)
  }
}


export function connect(root: Node | null): Node | null {
  if (root === null) {
    return root
  }
  let temp = []
  temp.push(root)
  while (temp.length) {
    let children: Node[] = []
    temp.forEach(child => {
      child.left && children.push(child.left)
      child.right && children.push(child.right)
    })
    children.forEach((r, i, arr) => {
      r.next = arr[i+1] || null
    })
    temp = children
  }
  return root
};


