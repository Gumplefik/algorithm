// https://leetcode-cn.com/explore/interview/card/tencent/226/dynamic-programming/924/

// 输入: [1,2,3,4,5]
// 输出: 4
// 解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。
//      因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
// 输入: [7,1,5,3,6,4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
//      随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。
// 本质就是找连续递增子串
export function maxProfit(prices: number[]): number {
    let l = prices.length
    let result: Array<number> = [0]
    for (let i=1; i<l; i++) {
        result[i] = Math.max(result[i-1], result[i-1] + prices[i] - prices[i-1])
    }
    return result[l-1]
}
