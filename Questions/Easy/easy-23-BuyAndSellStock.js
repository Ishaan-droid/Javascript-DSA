const maxProfit = (prices) => {
  let [left, right] = [0, 1];
  let maxProfit = 0;
  let profit;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      profit = prices[right] - prices[left];
      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right += 1;
  }
  return maxProfit;
};

export default maxProfit;

// [7,1,5,3,6,4]

// [7, 4, 5, 3, 6, 1, 8, 9, 3, 6, 8]

// 4,3,3,1,1

// [2,4,1]
