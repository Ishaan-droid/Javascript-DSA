// COULDN'T PASS ALL TEST CASES

const productExceptSelf = (nums) => {
  let [i, j] = [0, 1];
  let product = 1;
  const allProducts = [];

  while (i <= nums.length) {
    if (i === j) {
      if (i === nums.length - 1) {
        allProducts.push(product);
        return allProducts;
      }
      j += 1;
      product *= nums[j];
      j += 1;
    } else {
      product *= nums[j];
      j += 1;
    }

    if (j === nums.length) {
      if (product === -0) {
        product = 0;
      }
      allProducts.push(product);
      product = 1;
      i += 1;
      j = 0;
    }
  }
};

export default productExceptSelf;

// [1,2,3,4] => [24,12,8,6]
