const mySqrt = (x) => {
  let [i, j] = [0, x];

  while (i <= j) {
    let mid = Math.trunc((i + j) / 2);
    let result = mid * mid;

    if (result === x) return mid;

    if (result > x) {
      j = mid - 1;
    } else {
      i = mid + 1;
    }
  }
  return i - 1;
};

export default mySqrt;

// x = 8
