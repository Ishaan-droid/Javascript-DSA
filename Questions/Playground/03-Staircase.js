function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let flag = true;
    while (flag) {
      console.log("#".repeat(i).padStart(n));
      flag = false;
    }
  }
}
