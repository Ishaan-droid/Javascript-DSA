const practice = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      continue;
    } else if (arr[i + 1] < arr[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

export default practice;

//[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
