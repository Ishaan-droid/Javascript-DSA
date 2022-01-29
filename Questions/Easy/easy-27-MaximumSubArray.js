const maxSubArray = (nums) => {
  let maxSub = nums[0];
  let curSum = 0;

  for (let n of nums) {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum += n;
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub;
};

export default maxSubArray;

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]
