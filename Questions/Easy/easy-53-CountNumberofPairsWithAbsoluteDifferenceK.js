// I COUDN'T SOLVE IT

const countKDifference = (nums, k) => {
  const hashMap = {};
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!hashMap.hasOwnProperty(nums[i])) {
      hashMap[nums[i]] = 1;
    } else {
      hashMap[nums[i]] += 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (hashMap.hasOwnProperty(nums[i] - k)) {
      count += hashMap[nums[i] - k];
    }
  }

  return count;
};

export default countKDifference;

// [1, 2, 2, 1], 1

// [3,2,1,5,4], 2

// 1
