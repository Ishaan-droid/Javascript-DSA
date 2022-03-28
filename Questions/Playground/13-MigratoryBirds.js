function migratoryBirds(arr) {
  const hashMap = {};

  for (let a of arr) {
    if (!hashMap.hasOwnProperty(a)) {
      hashMap[a] = 1;
    } else {
      hashMap[a] += 1;
    }
  }

  const data = Object.entries(hashMap).sort((a, b) => b[1] - a[1]);

  return data[0][0];
}

migratoryBirds([2, 2, 2, 1, 1, 1, 3]);
