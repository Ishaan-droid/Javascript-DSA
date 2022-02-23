// I think I did it with O(n^2). This can be done with set as well.

const lengthOfLongestSubstring = (s) => {
  let [i, j] = [0, 0];
  let longestString = "";
  let tempString = "";

  while (i < s.length) {
    if (s[j] === undefined) break;
    tempString += s[j];
    j += 1;
    if (tempString.includes(s[j])) {
      i += 1;
      j = i;
      longestString = Math.max(tempString.length, longestString);
      tempString = "";
    }
  }

  longestString = Math.max(tempString.length, longestString);

  return longestString;
};

export default lengthOfLongestSubstring;

// pwwkew

// dvdf

// au
