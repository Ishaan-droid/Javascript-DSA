function sockMerchant(n, ar) {
  const hashMap = {};

  for (let a of ar) {
    if (!hashMap.hasOwnProperty(a)) {
      hashMap[a] = 1;
    } else {
      hashMap[a] += 1;
    }
  }

  const val = Object.values(hashMap);
  let pairs = 0;

  for (let v of val) {
    let x = Math.trunc(v / 2);
    pairs += x;
  }

  console.log(pairs);

  return pairs;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
