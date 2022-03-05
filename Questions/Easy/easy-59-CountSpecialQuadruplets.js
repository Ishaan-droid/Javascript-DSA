const countQuadruplets = (nums) => {
  let count = 0;

  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      for (let k = j + 1; k < nums.length - 1; k++) {
        for (let e = k + 1; e < nums.length; e++) {
          if (nums[i] + nums[j] + nums[k] === nums[e]) count += 1;
        }
      }
    }
  }

  return count;
};

export default countQuadruplets;

// [1,2,3,6]

// [3,3,6,4,5] => [3,3,4,5,6]

// [2,16,9,27,3,39] => [2,3,9,16,27,39]

// [1, 1, 1, 3, 5]
