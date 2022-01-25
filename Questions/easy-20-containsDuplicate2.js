const containsNearbyDuplicate = (nums, k) => {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(hashMap[nums[i]] - i) <= k) {
      return true;
    }
    hashMap[nums[i]] = i;
  }
  return false;
};

export default containsNearbyDuplicate;

//[1, 2, 3, 1]
