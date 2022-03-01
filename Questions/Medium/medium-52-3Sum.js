// Not Solved yet

const threeSum = (nums) => {
  if (nums.length < 3) return [];
  const hashMap = {};
  const hash = {};

  nums = nums.sort();

  console.log(nums);

  for (let i = 0; i < nums.length - 1; i++) {
    let a = nums[i];
    let b = nums[i + 1];
    hashMap[i] = [a, b, a + b - 2 * (a + b)];
  }

  console.log(hashMap);

  for (let [i, j] of Object.entries(hashMap)) {
    for (let n of nums) {
      if (j[2] === n) {
        hash[i] = hashMap[i];
      }
    }
  }

  console.log(hash);

  const arr = Object.values(hash);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i - 1] === undefined) break;
    if (
      arr[i - 1].reduce((acc, cur) => (acc *= cur), 1) ===
      arr[i].reduce((acc, cur) => (acc *= cur), 1)
    ) {
      arr.splice(i - 1, 1);
    }
  }

  return arr;
};

export default threeSum;

// [-1,0,1,2,-1,-4]

// [12, 3, 1, 2, -6, 5, -8, 6]
