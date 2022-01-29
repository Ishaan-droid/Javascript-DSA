export const power = (base, exp) => {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
};

// 2,3

export const factorial = (num) => {
  if (num === 1 || num === 0) return 1;
  return num * factorial(num - 1);
};

// 4

export const productOfArray = (nums) => {
  const s = nums.pop();
  if (!nums.length) return s;
  return s * productOfArray(nums);
};

// [1,2,3,10]

export const recursiveRange = (n) => {
  if (n === 0) return n;
  return n + recursiveRange(n - 1);
};

//6

export const fib = (n) => {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//  1,1,2,3,5,8
