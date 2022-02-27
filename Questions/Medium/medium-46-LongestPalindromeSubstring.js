const longestPalindrome = (s) => {
  let longestPalindrome = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let [l, r] = [i, i];

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > count) {
        longestPalindrome = s.slice(l, r + 1);
        count = r - l + 1;
      }
      l -= 1;
      r += 1;
    }

    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > count) {
        longestPalindrome = s.slice(l, r + 1);
        count = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }

  return longestPalindrome;
};

export default longestPalindrome;

// babad

// cbbd
