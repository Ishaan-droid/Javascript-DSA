function diagonalDifference(arr) {
  let check1 = 0;
  let check2 = arr[0].length - 1;
  let [sum1, sum2] = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][check1];
    check1 += 1;
  }

  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i][check2];
    check2 -= 1;
  }

  return Math.abs(sum1 - sum2);
}
