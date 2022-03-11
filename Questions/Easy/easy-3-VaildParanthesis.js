const isValid = function (s) {
  const hashMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];

  for (let c of s) {
    if (hashMap.hasOwnProperty(c)) {
      if (stack && stack[stack.length - 1] === hashMap[c]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  console.log(stack);

  if (!stack.length) return true;
  else return false;
};

export default isValid;

// ([){()}[]

// ()[]{}
