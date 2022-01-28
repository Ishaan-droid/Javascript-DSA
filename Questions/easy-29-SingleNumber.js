const singleNumber = (nums) => {
  const hashMap = {};

  for (let n of nums) {
    if (!hashMap.hasOwnProperty(n)) {
      hashMap[n] = 1;
    } else {
      hashMap[n] += 1;
    }
  }

  for (let [i, j] of Object.entries(hashMap)) {
    if (j === 1) return i;
  }
};

export default singleNumber;
