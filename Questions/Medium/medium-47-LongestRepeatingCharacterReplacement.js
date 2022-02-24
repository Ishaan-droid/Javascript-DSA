const characterReplacement = (s, k) => {
  const hashMap = {};
  let maxKey;
  let newString = "";
  let tempLength = 0;
  let maxLength = 0;

  for (let text of s) {
    if (!hashMap[text]) {
      hashMap[text] = 1;
    } else {
      hashMap[text] += 1;
    }
  }

  let maxOccuring = Math.max(...Object.values(hashMap));

  for (let [i, j] of Object.entries(hashMap)) {
    if (j === maxOccuring) {
      maxKey = i;
      delete hashMap[i];
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== maxKey && k !== 0) {
      newString += maxKey;
      k -= 1;
    } else {
      newString += s[i];
    }
  }

  console.log(newString);

  for (let i = 1; i < newString.length; i++) {
    if (newString[i - 1] === newString[i]) {
      tempLength += 1;
    } else {
      tempLength++;
      maxLength = Math.max(tempLength, maxLength);
      tempLength = 0;
    }
  }
  tempLength++;
  maxLength = Math.max(tempLength, maxLength);

  return maxLength;
};

export default characterReplacement;

// "AABABBA", 1

// AAAABBA
