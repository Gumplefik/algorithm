// https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/


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

export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return build(preorder, 0, preorder.length - 1, inorder, 0 , inorder.length - 1)
};

function build(preorder: number[], preStart: number, preEnd: number, inorder: number[], inStart: number, inEnd: number) {
  if (preStart > preEnd) {
    return null
  }
  let rootVal = preorder[preStart]
  let index = 0;
  for (let i = inStart; i<= inEnd; i++) {
    if (inorder[i] === rootVal) {
      index = i
      break
    }
  }
  let root = new TreeNode(rootVal)
  // 获得左子树的大小
  let leftSize = index - inStart
  root.left = build(preorder, preStart + 1 , preStart + leftSize, inorder, inStart, index - 1)
  root.right = build(preorder, preStart + leftSize + 1, preEnd, inorder, index + 1, inEnd)
  return root
}
