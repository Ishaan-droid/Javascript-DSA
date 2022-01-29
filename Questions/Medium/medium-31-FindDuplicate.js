const findDuplicate = (nums) => {
  const hashMap = {};

  for (let n of nums) {
    if (!hashMap.hasOwnProperty(n)) {
      hashMap[n] = 1;
    } else {
      return n;
    }
  }
};

export default findDuplicate;
