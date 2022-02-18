const majorityElement = (nums) => {
  if (nums.length === 1) nums[0];

  const hashMap = {};
  const majorityLength = Math.trunc(nums.length / 2);
  let temp = 0;

  for (let n of nums) {
    if (!hashMap.hasOwnProperty(n)) {
      hashMap[n] = 1;
    } else {
      hashMap[n] += 1;
      if (hashMap[n] > majorityLength) {
        temp = Math.max(temp, hashMap[n]);
      }
    }
  }

  const element = Object.keys(hashMap).find((cur) => hashMap[cur] === temp);

  return element;
};

export default majorityElement;

//[2, 2, 1, 1, 1, 2, 2]
