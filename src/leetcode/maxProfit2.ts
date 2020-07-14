// https://leetcode-cn.com/explore/interview/card/tencent/226/dynamic-programming/923/

// 只能交易一次
// 输入: [7,1,5,3,6,4]
// 输出: 5
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
//      注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。
// 细节：
// 你会发现买入价钱总是钱i-1个价钱中最小的
export function maxProfit2(prices: number[]): number {
    let l = prices.length
    let min = Infinity
    let result: Array<number> = [0]
    for (let i=1; i<l; i++) {
        prices[i-1] < min && (min = prices[i-1])
        result[i] = Math.max(result[i-1], prices[i] - min)
    }
    return result[l-1] || 0
}
