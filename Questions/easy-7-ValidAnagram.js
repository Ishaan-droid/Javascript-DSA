const isAnagram = (s, t) => {
  const sMap = {};

  if (t.length > s.length) return false;

  for (let text of s) {
    if (sMap.hasOwnProperty(text)) {
      sMap[text] += 1;
    } else {
      sMap[text] = 1;
    }
  }

  for (let text of t) {
    if (sMap.hasOwnProperty(text)) {
      sMap[text] -= 1;
    }
  }

  for (let o of Object.values(sMap)) {
    if (o !== 0) {
      return false;
    }
  }
  return true;
};

export default isAnagram;

// "anagram", "nagaram";
