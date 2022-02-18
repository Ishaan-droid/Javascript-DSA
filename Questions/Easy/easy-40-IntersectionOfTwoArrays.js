const intersection = (nums1, nums2) => {
  const hashMap = {};
  const arr = [];

  let longArr = [];
  let shortArr = [];

  if (nums1.length > nums2.length) {
    longArr = [...nums1];
    shortArr = [...nums2];
  } else {
    longArr = [...nums2];
    shortArr = [...nums1];
  }

  for (let i = 0; i < longArr.length; i++) {
    if (!hashMap.hasOwnProperty(longArr[i])) {
      hashMap[longArr[i]] = 1;
    } else {
      hashMap[longArr[i]] += 1;
    }
  }

  for (let i = 0; i < shortArr.length; i++) {
    if (hashMap.hasOwnProperty(shortArr[i])) {
      arr.push(shortArr[i]);
    }
  }

  let set = new Set(arr);
  set = Array.from(set);

  return set;
};

export default intersection;

// [1,2,2,1] [2,2]

// [4, 9, 5], [9,4,9,8,4]
