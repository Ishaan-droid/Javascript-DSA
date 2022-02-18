const capitalizeTitle = (title) => {
  title = title.split(" ");
  const arr = [];

  for (let t of title) {
    if (t.length <= 2) {
      t = t.toLowerCase();
      arr.push(t);
    } else {
      t = [t[0].toUpperCase(), ...t.slice(1).toLowerCase()].join("");
      arr.push(t);
    }
  }

  return arr.join(" ");
};

export default capitalizeTitle;

//"First leTTeR of EACH Word"
