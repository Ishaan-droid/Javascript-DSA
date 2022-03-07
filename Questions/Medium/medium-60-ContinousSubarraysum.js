const checkSubarraySum = (nums, k) => {
  // O(n) approach

  const hashMap = { 0: -1 };
  let sum = 0;

  for (let [idx, val] of Object.entries(nums)) {
    sum += val;
    let remainder = sum % k;
    if (!hashMap.hasOwnProperty(remainder)) {
      hashMap[remainder] = idx;
    } else if (
      hashMap.hasOwnProperty(remainder) &&
      idx - hashMap[remainder] > 1
    ) {
      return true;
    }
  }
  return false;

  // Time limit exceded with below approach, failing one test case

  //   if (nums.length < 2) {
  //     return false;
  //   }

  //   let sum = 0;

  //   for (let i = 0; i < nums.length; i++) {
  //     sum = nums[i];
  //     let [left, right] = [i, i + 1];

  //     while (left >= 0 && right < nums.length) {
  //       sum += nums[right];
  //       if (sum % k === 0) {
  //         return true;
  //       }
  //       sum = sum - nums[right];
  //       sum += nums[left - 1];
  //       if (sum % k === 0) {
  //         return true;
  //       }
  //       sum += nums[right];
  //       if (sum % k === 0) {
  //         return true;
  //       }
  //       left -= 1;
  //       right += 1;
  //     }
  //   }
  //   return false;
};

export default checkSubarraySum;

// [23,2,4,6,7], 6

// [23,2,4,6,8], 6

// [1,0], 2
