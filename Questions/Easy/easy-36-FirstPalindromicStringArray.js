const firstPalindrome = (words) => {
  for (let w of words) {
    if (w === w.split("").reverse().join("")) {
      return w;
    }
  }
  return "";
};

export default firstPalindrome;

// ["abc", "car", "ada", "racecar", "cool"]
