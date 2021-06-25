// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/


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

export function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  return build(inorder, 0, inorder.length - 1, postorder, 0 , postorder.length - 1)
};

function build(inorder: number[], inStart: number, inEnd: number, postorder: number[], postStart: number, postEnd: number) {
  if (inStart > inEnd) {
    return null
  }
  let rootVal = postorder[postEnd]
  let index = 0
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootVal) {
      index = i
      break
    }
  }
  let leftSize = index - inStart
  let root = new TreeNode(rootVal)
  root.left = build(inorder, inStart, index - 1, postorder, postStart, postStart + leftSize - 1)
  root.right = build(inorder, index + 1, inEnd, postorder, postStart + leftSize, postEnd - 1)
  return root
}


