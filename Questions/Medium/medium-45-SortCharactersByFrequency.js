const frequencySort = (s) => {
  const hashMap = {};
  let count = 0;
  let newString = "";

  for (let letter of s) {
    if (!hashMap.hasOwnProperty(letter)) {
      hashMap[letter] = 1;
    } else {
      hashMap[letter] += 1;
    }
  }

  const frequency = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  for (let f of frequency) {
    if (f[1] > 1) {
      count = f[1];
      while (count) {
        newString += f[0];
        count--;
      }
    } else {
      newString += f[0];
    }
  }

  return newString;
};

export default frequencySort;

// tree
