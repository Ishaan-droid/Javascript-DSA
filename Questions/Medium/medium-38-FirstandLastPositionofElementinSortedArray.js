const searchRange = (nums, target) => {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target, false);

  return [left, right];
};

function binarySearch(nums, target, leftBias) {
  let [l, r] = [0, nums.length - 1];
  let i = -1;
  while (l <= r) {
    let m = Math.trunc((l + r) / 2);
    if (target > nums[m]) {
      l = m + 1;
    } else if (target < nums[m]) {
      r = m - 1;
    } else {
      i = m;
      if (leftBias) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return i;
}

export default searchRange;

// [1,1,2]

// Input: nums = [1, 2, 3, 5, 7, 7, 8, 8, 9, 10], target = 8

// [5, 7, 7, 8, 8, 10], target = 8
