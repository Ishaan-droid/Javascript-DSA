function plusMinus(arr) {
  let [positive, negative, zero] = [0, 0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negative += 1;
    else if (arr[i] > 0) positive += 1;
    else zero += 1;
  }

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(zero / arr.length);
}
