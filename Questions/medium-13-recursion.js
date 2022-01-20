export const reverse = (str, count) => {
  if (str.length < 1) return str;
  let check = str.length - count;
  if (check === 0) return str[check];
  return str[check] + reverse(str, count + 1);
};

// awesome
