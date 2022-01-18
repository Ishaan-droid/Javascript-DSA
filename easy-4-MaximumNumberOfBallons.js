const maxNumberOfBalloons = (text) => {
  const balloon = {
    b: 0,
    a: 0,
    l: 0,
    o: 0,
    n: 0,
  };

  for (let i = 0; i < text.length; i++) {
    if (balloon.hasOwnProperty(text[i])) {
      if (text[i] === "l") {
        balloon["l"] += 0.5;
      } else if (text[i] === "o") {
        balloon["o"] += 0.5;
      } else {
        balloon[text[i]] += 1;
      }
    }
  }

  let final = Object.values(balloon);
  final = Math.min(...final);

  if (final === 0.5) return 0;
  else return Math.trunc(final);
};

export default maxNumberOfBalloons;

//balon
