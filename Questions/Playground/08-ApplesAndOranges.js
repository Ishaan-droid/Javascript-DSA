function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let [fallenApples, fallenOranges] = [0, 0];

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] > 0) {
      let fallenDistance = a + apples[i];
      if (fallenDistance >= s && fallenDistance <= t) {
        fallenApples += 1;
      }
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] < 0) {
      let fallenDistance = b + oranges[i];
      if (fallenDistance >= s && fallenDistance <= t) {
        fallenOranges += 1;
      }
    }
  }

  console.log(fallenApples);
  console.log(fallenOranges);
}
