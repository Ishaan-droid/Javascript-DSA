const lengthOfLastWord = (s) => {
  const str = s.split(" ");

  if (str[str.length - 1] === "") {
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i].length > 0) {
        return str[i].length;
      }
    }
  } else {
    return str[str.length - 1].length;
  }
};

export default lengthOfLastWord;

//"   fly me   to   the moon  "
