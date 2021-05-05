import { describe, it } from "mocha";
import { expect } from "chai";
import {MyCircularQueue} from "./MyCircularQueue";






describe('MyCircularQueue', () => {
  let circularQueue = new MyCircularQueue(3)


  it('case 1', () => {
    expect(circularQueue.enQueue(1)).to.equal(
      true
    )
  })
  it('case 2', () => {
    expect(circularQueue.enQueue(2)).to.equal(
      true
    )
  })
  it('case 3', () => {
    expect(circularQueue.enQueue(3)).to.equal(
      true
    )
  })
  it('case 4', () => {
    expect(circularQueue.enQueue(4)).to.equal(
      false
    )
  })
  it('case 5', () => {
    expect(circularQueue.Rear()).to.equal(
      3
    )
  })
  it('case 6', () => {
    expect(circularQueue.isFull()).to.equal(
      true
    )
  })
  it('case 7', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
  it('case 8', () => {
    expect(circularQueue.enQueue(4)).to.equal(
      true
    )
  })
  it('case 9', () => {
    expect(circularQueue.Rear()).to.equal(
      4
    )
  })
})
