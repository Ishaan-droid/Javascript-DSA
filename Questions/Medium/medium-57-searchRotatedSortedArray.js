const search = (nums, target) => {
  if (nums.length === 1 && nums[0] === target) return 0;
  let [i, j] = [0, nums.length - 1];
  let leastSum = nums[i] + nums[j];
  let idx = -1;

  while (i < j) {
    if (nums[i] === target) {
      idx = i;
      return idx;
    } else if (nums[j] === target) {
      idx = j;
      return idx;
    }
    let sum = nums[i] + nums[j];

    if (sum >= leastSum) {
      if (nums[i] === target) return i;
      i += 1;
    } else if (sum >= target) {
      if (nums[j] === target) return j;
      j -= 1;
    } else if (sum < target) {
      return -1;
    }
  }
  return idx;
};

export default search;

// [4, 5, 6, 7, 0, 1, 2], 6
