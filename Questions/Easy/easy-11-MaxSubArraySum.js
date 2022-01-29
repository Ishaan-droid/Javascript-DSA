const maxSubarraySum = (nums, s) => {
  if (s > nums.length) return null;
  let [i, j] = [0, 0];
  let sum = 0;
  let tempSum = 0;
  let finalSum = 0;

  while (j < nums.length) {
    sum += nums[j];
    j += 1;

    if (j - i === s) {
      i += 1;
      j = i;
      tempSum = sum;
      sum = Math.max(tempSum, finalSum);
      finalSum = sum;
      sum = 0;
    }
    if (j === nums.length) return finalSum;
  }
};

export default maxSubarraySum;

//[100, 200, 300, 400], 2

//[1, 4, 2, 10, 23, 3, 1, 0, 20], 4
