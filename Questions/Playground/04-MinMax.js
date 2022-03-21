function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  let [minSum, maxSum] = [0, 0];

  for (let i = 0; i <= 3; i++) {
    minSum += arr[i];
  }

  for (let i = 1; i <= 4; i++) {
    maxSum += arr[i];
  }

  console.log(minSum, maxSum);
}
