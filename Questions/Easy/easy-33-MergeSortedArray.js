const merge = (nums1, m, nums2, n) => {
  let count = 0;
  for (let i = nums1.length - 1; i > -1; i--) {
    if (nums1[i] === 0) {
      nums1[i] = nums2[count];
      count++;
    }
    if (count === n) {
      break;
    }
  }
  nums1 = nums1.sort((a, b) => a - b);
  return nums1;
};

export default merge;

// [0], 0, [1], 1

// [1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3

// [-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3
