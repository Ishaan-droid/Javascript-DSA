const minWindow = (s, t) => {
  let freq = new Map();
  let totalFreq = 0;
  for (let l of t) {
    if (freq.has(l)) freq.set(l, freq.get(l) + 1);
    else freq.set(l, 1);
    totalFreq++;
  }

  let shortestWindow = "";
  let i = 0,
    j = 0;

  while (j < s.length) {
    if (freq.has(s[j])) {
      if (freq.get(s[j]) > 0) totalFreq--;
      freq.set(s[j], freq.get(s[j]) - 1);
    }

    while (totalFreq == 0 && i <= j) {
      //while the window is valid
      if (shortestWindow.length == 0 || shortestWindow.length > j - i)
        shortestWindow = s.substr(i, j - i + 1); //substr takes starting index and length

      if (freq.has(s[i])) {
        if (freq.get(s[i]) >= 0) totalFreq++;
        freq.set(s[i], freq.get(s[i]) + 1);
      }
      i++;
    }

    j++;
  }

  return shortestWindow;

  //   if (s === t) return s;
  //   if (t.length > s.length) return "";
  //   let [i, j] = [0, 0];
  //   const arr = [];
  //   let tempString = "";

  //   const hashMap = {};

  //   for (let text of t) {
  //     if (!hashMap.hasOwnProperty(text)) {
  //       hashMap[text] = 1;
  //     } else {
  //       hashMap[text] += 1;
  //     }
  //   }

  //   let hash = { ...hashMap };

  //   while (j < s.length) {
  //     tempString += s[j];
  //     j += 1;
  //     if (hash.hasOwnProperty(s[j - 1])) {
  //       hash[s[j - 1]] -= 1;
  //     }
  //     if (Object.values(hash).every((cur) => cur === 0 || cur < 0)) {
  //       if (!arr.length) {
  //         arr.push(tempString);
  //       } else if (tempString.length < arr[arr.length - 1].length) {
  //         arr.push(tempString);
  //       }
  //       tempString = "";
  //       i += 1;
  //       j = i;
  //       hash = { ...hashMap };
  //     }
  //   }

  //   if (arr.length) {
  //     return arr.pop();
  //   } else return "";
};

export default minWindow;

// "ADOBECODEBANC", "ABC"

// "bbaa", "aba"

// "cabwefgewcwaefgcf", "cae"

// "acbbaca", "aba"
