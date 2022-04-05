// NOT WORKED

function climbingLeaderboard(ranked, player) {
  let rank = 0;
  const hashMap = {};

  for (let i = 0; i < ranked.length; i++) {
    if (!hashMap.hasOwnProperty(ranked[i])) {
      hashMap[ranked[i]] = ++rank;
    } else {
      hashMap[ranked[i]] = rank;
    }
  }

  let start = 0;
  const ranks = [];

  while (start < player.length) {
    for (let [i, j] of Object.entries(hashMap)) {
      if (player[start] > i) {
        ranks.push(j - 1 + 1);
        start += 1;
        continue;
      } else if (player[start] < i) {
        ranks.push(j + 1);
        start += 1;
        continue;
      }
    }
  }

  console.log(player);
  console.log(hashMap);

  console.log(ranks);
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
