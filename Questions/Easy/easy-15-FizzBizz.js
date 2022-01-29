const fizzBuzz = (num) => {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) arr[i] = "FizzBuzz";
    if (arr[i] % 3 === 0) arr[i] = "Fizz";
    if (arr[i] % 5 === 0) arr[i] = "Buzz";
    else {
      arr[i] = String(arr[i]);
    }
  }
  return arr;
};

export default fizzBuzz;
