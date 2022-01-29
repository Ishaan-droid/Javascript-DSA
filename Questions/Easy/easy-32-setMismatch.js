const findErrorNums = (nums) => {
  const hashMap = {};
  const arr = [];

  for (let n of nums) {
    if (!hashMap.hasOwnProperty(n)) {
      hashMap[n] = 1;
    } else {
      arr.push(n);
    }
  }

  const arr2 = nums.map((_, idx) => idx + 1);

  for (let n of arr2) {
    if (nums.indexOf(n) === -1) {
      arr.push(n);
    }
  }

  return arr;
};

export default findErrorNums;

// [1,2,2,4]

// [3,2,2] => [2,1]

// [3,2,3,4,6,5] => [3,1]

//Find the number that occurs twice and the number that is missing and return them in the form of an array.
