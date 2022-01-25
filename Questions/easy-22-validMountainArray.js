const validMountainArray = (arr) => {
  if (arr.length < 3) return false;

  let [inc, dec] = [0, 0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      if (dec > 0) return false;
      inc += 1;
      if (inc === arr.length - 1) return false;
    } else if (arr[i] < arr[i - 1]) {
      dec += 1;
      if (dec === arr.length - 1) return false;
    } else {
      return false;
    }
  }
  return true;
};

export default validMountainArray;

// [0, 1, 4, 3, 2, 5, 4]
