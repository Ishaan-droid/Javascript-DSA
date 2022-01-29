const maximumDifference = (nums) => {
  let [left, right] = [0, 1];
  let maxDiff = 0;

  while (right < nums.length) {
    if (nums[right] > nums[left]) {
      let diff = nums[right] - nums[left];
      maxDiff = Math.max(diff, maxDiff);
    } else {
      left = right;
    }
    right += 1;
  }
  if (maxDiff === 0) return -1;
  return maxDiff;
};

export default maximumDifference;

// [7,1,5,4]
