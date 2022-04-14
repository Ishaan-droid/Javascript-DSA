// THIS IS A POOR APPROACH. NOT ALL TEST CASES PASSED

const coinChange = (coins, amount) => {
  coins.sort((a, b) => b - a);

  let start = 0;
  let sum = 0;
  let numberOfCoins = 0;

  while (start < coins.length) {
    sum += coins[start];

    numberOfCoins += 1;

    if (sum === amount) {
      return numberOfCoins;
    } else if (sum > amount) {
      sum -= coins[start];
      numberOfCoins -= 1;
      start += 1;
    } else if (start === coins.length - 1) {
      if (sum > amount) {
        return -1;
      }
      sum += coins[start];
      if (sum === amount) return numberOfCoins + 1;
      else return -1;
    }
  }

  return numberOfCoins;
};

export default coinChange;

// [1, 2, 5], 11

// [2] 1
