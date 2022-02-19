const isIsomorphic = (s, t) => {
  const hashMap = {};
  const hash = {};

  for (let i = 0; i < s.length; i++) {
    if (
      (hashMap.hasOwnProperty(s[i]) && hashMap[s[i]] !== t[i]) ||
      (hash.hasOwnProperty(t[i]) && hash[t[i]] !== s[i])
    ) {
      return false;
    }

    hashMap[s[i]] = t[i];
    hash[t[i]] = s[i];
  }
  return true;
};

export default isIsomorphic;

// 'egg' 'add'

// paper, title

// "badc","baba"
