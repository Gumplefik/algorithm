import { describe, it } from "mocha";
import { expect } from "chai";
import {numTrees} from "../numTrees";


describe('numTrees', () => {
  it('case 1', () => {
    expect(numTrees(3)).to.equal(5)
  })
  it('case 2', () => {
    expect(numTrees(1)).to.equal(1)

  })
  it('case 3', () => {
    expect(numTrees(4)).to.equal(14)
  })
})
