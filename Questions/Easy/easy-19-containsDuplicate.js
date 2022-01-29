const containsDuplicate = (nums) => {
  const hashMap = {};

  for (let n of nums) {
    if (!hashMap.hasOwnProperty(n)) {
      hashMap[n] = 1;
    } else {
      hashMap[n] = hashMap[n] + 1;
      return true;
    }
  }
  return false;
};

export default containsDuplicate;

//[1, 2, 3, 1]
