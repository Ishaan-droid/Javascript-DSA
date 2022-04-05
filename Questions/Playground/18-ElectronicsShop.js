function getMoneySpent(keyboards, drives, b) {
  let sum = -1;

  for (let k of keyboards) {
    for (let d of drives) {
      let currentSum = k + d;
      if (currentSum <= b) {
        sum = Math.max(sum, currentSum);
      }
    }
  }

  return sum;
}
