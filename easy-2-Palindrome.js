// To get right most digit always use modulus of 10.
// To get left most digit always divide it by that numbers place => 1000 for 1221

// To eliminate right most digit divide it by 10
// To eliminate left most digit use modulus by that numbers place => 10 % 22 => 2

const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x % 10 === 0 && x !== 0) return false;

  let right, left;
  let div = 1;

  while (x >= 10 * div) {
    div = div * 10;
  }

  while (x > 0) {
    right = x % 10;
    left = x / div;

    if (Math.trunc(right) !== Math.trunc(left)) return false;

    x = x % div;
    x = Math.trunc(x / 10);
    div = div / 100;
  }
  return true;
};

export default isPalindrome;

// 1221
