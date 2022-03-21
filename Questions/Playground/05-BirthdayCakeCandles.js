function birthdayCakeCandles(candles) {
  // Write your code here
  candles.sort((a, b) => b - a);
  let check = 1;

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === candles[i + 1]) {
      check += 1;
    } else {
      break;
    }
  }

  return check;
}
