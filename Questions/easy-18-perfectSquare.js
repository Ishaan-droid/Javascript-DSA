const isPerfectSquare = (num) => {
  let [i, j] = [0, num];

  while (i <= j) {
    let mid = Math.trunc((i + j) / 2);
    let result = mid * mid;

    if (result === num) return true;

    if (result > num) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return false;
};

export default isPerfectSquare;

// 16
// j = 8, result = 64
// j = 7, result = 9
