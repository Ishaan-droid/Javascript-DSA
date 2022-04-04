function countingValleys(steps, path) {
  let inc = 0;
  let dec = 0;
  let valley = 0;
  let start = 0;

  while (start < path.length) {
    if (path[start] === "U") inc += 1;
    if (path[start] === "D") dec += 1;

    if (dec - inc === 0 && path[start] === "U") {
      valley += 1;
      inc = 0;
      dec = 0;
    }

    start += 1;
  }

  return valley;
}

countingValleys(8, "UDUUUDUDDD");

// DDUUDDUDUUUD

// UDUUUDUDDD
