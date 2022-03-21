const practice = (a, b) => {
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    if (a.every((cur) => i % cur === 0)) {
      if (b.every((cur) => cur % i === 0)) {
        count += 1;
      }
    }
  }

  return count;
};

export default practice;

// [2, 4], [16, 32, 96]
