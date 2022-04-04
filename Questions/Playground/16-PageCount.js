function pageCount(n, p) {
  const start = Math.trunc(n / 2);
  const end = Math.trunc(p / 2);
  const initial = start - end;

  return Math.min(end, initial);
}
