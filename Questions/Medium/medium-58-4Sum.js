const fourSum = (nums, target) => {
  nums = nums.sort((a, b) => a - b);
  const arr = [];

  console.log(nums);

  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let [left, right] = [j + 1, nums.length - 1];

      while (left < right) {
        let sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum < target) {
          left += 1;
        } else if (sum > target) {
          right -= 1;
        } else {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);
          left += 1;
          while (nums[left] === nums[left - 1] && left < right) left += 1;
        }
      }
    }
  }

  return arr;
};

export default fourSum;

// [1, 0, -1, 0, -2, 2], 0

// [2,2,2,2,2]
