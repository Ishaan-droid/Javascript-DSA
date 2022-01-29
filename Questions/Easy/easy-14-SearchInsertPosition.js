const searchInsert = (nums, target) => {
  // O(n) approach

  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //       return i;
  //     } else if (target < nums[i]) {
  //       return i;
  //     }
  //   }
  //   if (!nums.includes(target)) return nums.length;

  // O(log n) approach

  let [i, j] = [0, nums.length - 1];

  while (i <= j) {
    const mid = Math.trunc((i + j) / 2);

    if (target === nums[mid]) return mid;

    if (target > nums[mid]) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }
  return i;
};

export default searchInsert;

// [1, 3, 5, 6], 5
// 0 3 => 1
