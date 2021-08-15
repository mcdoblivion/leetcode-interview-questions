/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0
    let currentPrice = prices[0]
    prices.forEach((price) => {
        if (price > currentPrice) profit += price - currentPrice
        currentPrice = price
    })
    return profit
}
