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
  let currentElement, neededValue, storedValue;

  for (let i = 0; i < nums.length; i++) {
    currentElement = nums[i];
    neededValue = target - currentElement;
    storedValue = hashMap[neededValue];

    if (storedValue != null) {
      return [storedValue, i];
    }
    hashMap[currentElement] = i;
  }
};

export default twoSum;

// [3,2,4],6
