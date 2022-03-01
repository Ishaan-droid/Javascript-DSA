// BRUTE FORCE APPROACH

// const twoSum = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i+1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

// HASH MAP

const twoSum = (nums, target) => {
  const hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let subtractedValue = target - nums[i];

    if (hashMap.hasOwnProperty(subtractedValue)) {
      return [hashMap[subtractedValue], i];
    }

    hashMap[nums[i]] = i;
  }
};

export default twoSum;

// [2, 7, 11, 15], 9

// [3, 2, 4], 6
