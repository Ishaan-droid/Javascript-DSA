function bonAppetit(bill, k, b) {
  const sum = bill.reduce((acc, cur) => (acc += cur), 0);

  const annaEat = sum - bill[k];

  if (annaEat / 2 === b) {
    console.log("Bon Appetit");
  } else {
    let x = annaEat / 2;
    console.log(Math.abs(b - x));
  }
}
