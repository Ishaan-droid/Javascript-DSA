const threeSum = (nums) => {
  nums = nums.sort((a, b) => a - b);
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let [j, k] = [i + 1, nums.length - 1];

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k -= 1;
      } else if (sum < 0) {
        j += 1;
      } else {
        arr.push([nums[i], nums[j], nums[k]]);
        j += 1;
        while (nums[j] === nums[j - 1] && j < k) {
          j += 1;
        }
      }
    }
  }

  return arr;
};

export default threeSum;

// [-1,0,1,2,-1,-4] => [-4,-1,-1,0,1,2]
