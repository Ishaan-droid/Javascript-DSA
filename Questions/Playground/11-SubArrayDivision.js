function birthday(s, d, m) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let arr = [...s].splice(i, m);
    // let arr = s.slice(0 + i, m + i)
    let sum = arr.reduce((acc, cur) => (acc += cur), 0);

    if (sum === d) {
      count += 1;
    }
  }

  return count;
}
