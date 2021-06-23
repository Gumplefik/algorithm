import { describe, it } from "mocha";
import { expect } from "chai";
import {MyCircularQueue, MyCircularQueue2} from "./MyCircularQueue";






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

describe('MyCircularQueue3', () => {
  let circularQueue = new MyCircularQueue2(8)


  it('case 1', () => {
    expect(circularQueue.enQueue(3)).to.equal(
      true
    )
  })
  it('case 2', () => {
    expect(circularQueue.enQueue(9)).to.equal(
      true
    )
  })
  it('case 3', () => {
    expect(circularQueue.enQueue(5)).to.equal(
      true
    )
  })
  it('case 4', () => {
    expect(circularQueue.enQueue(0)).to.equal(
      true
    )
  })
  it('case 5', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
  it('case 6', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
  it('case 7', () => {
    expect(circularQueue.isEmpty()).to.equal(
      false
    )
  })
  it('case 8', () => {
    expect(circularQueue.isEmpty()).to.equal(
      false
    )
  })
  it('case 9', () => {
    expect(circularQueue.Rear()).to.equal(
      0
    )
  })
  it('case 10', () => {
    expect(circularQueue.Rear()).to.equal(
      0
    )
  })
  it('case 11', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
})

describe('MyCircularQueue2', () => {
  let circularQueue = new MyCircularQueue(8)


  it('case 1', () => {
    expect(circularQueue.enQueue(3)).to.equal(
      true
    )
  })
  it('case 2', () => {
    expect(circularQueue.enQueue(9)).to.equal(
      true
    )
  })
  it('case 3', () => {
    expect(circularQueue.enQueue(5)).to.equal(
      true
    )
  })
  it('case 4', () => {
    expect(circularQueue.enQueue(0)).to.equal(
      true
    )
  })
  it('case 5', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
  it('case 6', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
  it('case 7', () => {
    expect(circularQueue.isEmpty()).to.equal(
      false
    )
  })
  it('case 8', () => {
    expect(circularQueue.isEmpty()).to.equal(
      false
    )
  })
  it('case 9', () => {
    expect(circularQueue.Rear()).to.equal(
      0
    )
  })
  it('case 10', () => {
    expect(circularQueue.Rear()).to.equal(
      0
    )
  })
  it('case 11', () => {
    expect(circularQueue.deQueue()).to.equal(
      true
    )
  })
})
