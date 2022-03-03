const threeSumClosest = (nums, target) => {
  nums = nums.sort((a, b) => a - b);
  let sum = 0;
  let finalSum = Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let [l, r] = [i + 1, nums.length - 1];
    while (l < r) {
      sum = nums[i] + nums[l] + nums[r];
      if (Math.abs(target - finalSum) > Math.abs(target - sum)) {
        finalSum = sum;
      }

      if (sum > target) {
        r -= 1;
      } else if (sum < target) {
        l += 1;
      } else {
        l += 1;
        while (nums[l] === nums[l - 1] && l < r) l += 1;
      }
    }
  }
  return finalSum;
};

export default threeSumClosest;

// [-1, 2, 1, -4], 1

// [-4, -1, 1, 2]

// [1,1,1,0], -100

// [0,1,1,1]
