function breakingRecords(scores) {
  let [best, worst] = [0, 0];
  let initial = scores[0];

  for (let i = 0; i <= scores.length; i++) {
    if (scores[i] < initial) {
      worst += 1;
      initial = scores[i];
    }
  }

  initial = scores[0];

  for (let i = 0; i <= scores.length; i++) {
    if (scores[i] > initial) {
      best += 1;
      initial = scores[i];
    }
  }

  return [best, worst];
}
