const reverseString = (s) => {
  const stringLength = s.length;

  for (let i = stringLength - 1; i >= 0; i--) {
    s.push(s[i]);
  }

  s.splice(0, stringLength);

  return s;
};

export default reverseString;

// ["h", "e", "l", "l", "o"]
