// https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
// https://labuladong.gitee.io/algo/2/18/20/
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (root === null) {
    return
  }
  flatten(root.left)
  flatten(root.right)

  let left = root.left
  let right = root.right

  root.left = null
  root.right = left


  // 递归获取最深的右侧节点，不要懵逼了，注意前面已经把左侧的数赋值给右侧了，所以这里是找到原始的左侧数的最深节点，将右侧节点的头连接过来
  let p = root
  while(p.right) {
    p = p.right
  }
  p.right = right
};
