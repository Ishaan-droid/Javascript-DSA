const missingNumber = (nums) => {
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i !== nums[i]) {
      return i;
    }
  }

  if (nums[nums.length - 1] !== nums.length) {
    return nums.length;
  }
};

export default missingNumber;

//[0,1,3]

// [0,1]
