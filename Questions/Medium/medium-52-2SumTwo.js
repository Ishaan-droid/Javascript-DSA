const twoSum2 = (numbers, target) => {
  let [i, j] = [0, numbers.length - 1];
  let sum = 0;

  while (i < j) {
    sum = numbers[j] + numbers[i];
    if (sum === target) return [i + 1, j + 1];
    if (sum > target) j -= 1;
    if (sum < target) i += 1;
  }
};

export default twoSum2;

// [2,7,11,15],9
