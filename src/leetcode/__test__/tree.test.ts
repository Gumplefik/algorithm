import { describe, it } from "mocha";
import { expect } from "chai";
import {invertTree, TreeNode} from "../invertTree";


describe('invertTree', () => {
  let x = new TreeNode(2, new TreeNode(1), new TreeNode(3))
  let y = new TreeNode(7, new TreeNode(6), new TreeNode(9))
  let tree = new TreeNode(4, x, y)
  invertTree(tree)
  it('case 1', () => {
    expect(tree.left?.val).to.equal(7)
  })
  it('case 2', () => {
    expect(tree.left?.left?.val).to.equal(9)
  })
  it('case 3', () => {
    expect(tree.left?.right?.val).to.equal(6)
  })
  it('case 4', () => {
    expect(tree.right?.left?.val).to.equal(3)
  })
  it('case 5', () => {
    expect(tree.right?.right?.val).to.equal(1)
  })
})
