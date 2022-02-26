const groupAnagrams = (strs) => {
  const hashMap = {};

  for (let s of strs) {
    let word = s.split("").sort().join("");

    if (!hashMap.hasOwnProperty(word)) {
      hashMap[word] = [s];
    } else {
      hashMap[word].push(s);
    }
  }

  const arr = Object.values(hashMap);

  return arr;
};

export default groupAnagrams;

// ["eat", "tea", "tan", "ate", "nat", "bat"]
