const validPalindrome = (s) => {
  s = s.replace(/[^0-9a-z]/gi, "").toLowerCase();

  let [start, end] = [0, s.length - 1];

  while (start < end) {
    if (s[start] === s[end]) {
      start += 1;
      end -= 1;
    } else {
      return false;
    }
  }
  return true;
};

export default validPalindrome;

// "A man, a plan, a canal: Panama"
