const firstUniqChar = (s) => {
  const hashMap = new Map();
  let answer = -1;

  for (let letter of s) {
    if (!hashMap.has(letter)) {
      hashMap.set(letter, 1);
    } else if (hashMap.has(letter)) {
      let i = hashMap.get(letter);
      i += 1;
      hashMap.set(letter, i);
    }
  }

  for (let [i, j] of hashMap.entries()) {
    if (j === 1) {
      answer = i;
      break;
    }
  }
  answer = s.indexOf(answer);
  return answer;
};

export default firstUniqChar;

// leetcode
