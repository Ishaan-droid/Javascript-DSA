// COULDN'T PASS ALL TEST CASES

const productExceptSelf = (nums) => {
  const [preArr, postArr] = [[1], []];
  postArr[nums.length - 1] = 1;
  const arr = [];

  for (let i = 1; i < nums.length; i++) {
    preArr[i] = nums[i - 1] * preArr[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    postArr[i] = nums[i + 1] * postArr[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    arr[i] = preArr[i] * postArr[i];
  }

  return arr;
};

export default productExceptSelf;

// [1,2,3,4] => [24,12,8,6]

// preArr => [1,1,2,6]

// postarr => [24,12,4,1]

// []
