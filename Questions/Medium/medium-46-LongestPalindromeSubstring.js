const longestPalindrome = (s) => {
  if (s.length === 0) return "";

  let [start, end] = [0, 0];

  for (let i = 0; i < s.length; i++) {
    let len1 = expandFromMiddle(s, i, i);
    let len2 = expandFromMiddle(s, i, i + 1);
    let len = Math.max(len1, len2);

    if (len > end - start) {
      start = i - (len - 1) / 2;
      end = i + len / 2;
    }
  }

  return s.substring(start, end + 1);
};

function expandFromMiddle(s, left, right) {
  if (s.length === 0 || left > right) return 0;

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left -= 1;
    right += 1;
  }
  return right - left - 1;
}

export default longestPalindrome;

// babad

// cbbd
