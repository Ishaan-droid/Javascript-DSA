const countWords = (words1, words2) => {
  let longArr = [];
  let shortArr = [];
  let count = 0;
  const hashMap = {};

  if (words1.length > words2.length) {
    longArr = [...words1];
    shortArr = [...words2];
  } else {
    longArr = [...words2];
    shortArr = [...words1];
  }

  for (let i = 0; i < longArr.length; i++) {
    if (!hashMap.hasOwnProperty(longArr[i])) {
      hashMap[longArr[i]] = 1;
    } else {
      hashMap[longArr[i]] = 0;
    }
  }

  for (let i = 0; i < shortArr.length; i++) {
    if (hashMap.hasOwnProperty([shortArr[i]]) && hashMap[shortArr[i]] === 1) {
      count += 1;
    }
  }

  return count;
};

export default countWords;
