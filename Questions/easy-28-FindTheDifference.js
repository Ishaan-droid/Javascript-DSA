const findTheDifference = (s, t) => {
  const arrS = s.split("").sort();
  const arrT = t.split("").sort();

  for (let i = 0; i < t.length; i++) {
    if (arrS[i] !== arrT[i]) return arrT[i];
  }
};

export default findTheDifference;

// abcd abcde

// a aa
