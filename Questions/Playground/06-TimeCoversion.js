function timeConversion(s) {
  // Write your code here
  let tempString = s;
  const arr = tempString.slice(0, 8).split(":");

  if (s[s.length - 2] === "A") {
    if (arr[0] === "12") {
      arr[0] = "00";
    }
  } else if (s[s.length - 2] === "P") {
    if (Number(arr[0]) < 12) {
      arr[0] = String(Number(arr[0]) + 12);
    }
  }

  arr[2].slice(2);

  return arr.join(":");
}
