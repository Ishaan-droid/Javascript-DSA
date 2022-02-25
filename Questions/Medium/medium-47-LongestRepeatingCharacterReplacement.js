const characterReplacement = (s, k) => {
  const hashMap = {};
  let [l, res] = [0, 0];

  for (let r = 0; r < s.length; r++) {
    if (!hashMap.hasOwnProperty(s[r])) {
      hashMap[s[r]] = 1;
    } else {
      hashMap[s[r]] += 1;
    }

    while (r - l + 1 - Math.max(...Object.values(hashMap)) > k) {
      hashMap[s[l]] -= 1;
      l += 1;
    }

    res = Math.max(res, r - l + 1);
  }
  return res;
};

export default characterReplacement;

// ABAB 2

// "AABABBA", 1

// AAAABBA
