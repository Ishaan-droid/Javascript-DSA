// FAILING ONE EDGE CASE

const lengthOfLongestSubstring = (s) => {
  if (s === " " || s.length === 1) return 1;
  let [left, right] = [0, 0];
  let longestString = "";
  let finalLongestString = 0;

  while (right < s.length) {
    longestString += s[right];
    if (longestString.includes(s[right + 1])) {
      finalLongestString = Math.max(finalLongestString, longestString.length);
      longestString = "";
      left = right;
    }
    right += 1;
  }
  return Math.max(longestString.length, finalLongestString);
};

export default lengthOfLongestSubstring;

// pwwkew

// dvdf

// au
