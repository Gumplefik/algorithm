// https://leetcode-cn.com/problems/min-stack/

export class MinStack {
    private stack: Array<number>;
    constructor() {
        this.stack = []
    }

    push(x: number): void {
        this.stack.push(x)
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
        let l = this.stack.length - 1
        if (l >= 0) {
            return this.stack[l]
        }
        return Infinity
    }

    getMin(): number {
        let l = this.stack.length;
        let min = Infinity;
        let key = 0;
        for (let i=0; i<l; i++) {
            let val = this.stack[i]
            val === undefined && (val = Infinity);
            if (val < min) {
                key = i;
                min = val
            }
        }
        this.stack.slice(key, 1);
        return min
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
