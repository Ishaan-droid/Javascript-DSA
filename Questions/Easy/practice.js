const practice = (s, t) => {
  let check = 0;

  if (!s) return true;
  if (s.length > t.length) return false;

  for (let text of t) {
    if (s[check] !== text) {
      continue;
    } else {
      check += 1;
      if (check === s.length) return true;
    }
  }
  return false;
};

export default practice;

//  abc, ahbgdc

// "", "ahbgdc"
