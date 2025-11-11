/*
Given a array of numbers representing the stock prices of a company
in chronological order, write a function that calculates the maximum profit
you could have made from buying and selling that stock once.
You must buy before you can sell it.

For example, given [9, 11, 8, 5, 7, 10], you should return 5,
since you could buy the stock at 5 dollars and sell it at 10 dollars.
*/
"use strict";

const stock = [7, 6, 11, 8, 5, 7, 10];

// With reversed array
// This runs in O(N) time and O(1) space.
const reversed = stock => {
  let maxProfit = 0, currentMax = 0;

  for (let price of stock.reverse()) {
    let currentProfit;
    currentMax = Math.max(price, currentMax);
    currentProfit = currentMax - price;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  return maxProfit;
}

console.log(`Maxium profit was ${reversed(stock)}`);
