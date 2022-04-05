function catAndMouse(x, y, z) {
  const catBDiff = Math.abs(y - z);
  const catADiff = Math.abs(x - z);

  if (catBDiff < catADiff) {
    return "Cat B";
  } else if (catADiff < catBDiff) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
}
