// // Tuple without type annotation
const names1 = ["Mark", "Daniel", "Matthew"];
console.log(`names1: ${names1}`);

// Array with elements of type number with type annotation
const luckyNumbers2: number[] = [3, 7, 42];
console.log(`luckyNumbers2: ${luckyNumbers2}`);

// Array with elements of mixed types with type annotation using union type
const randomData3: (number | string | boolean)[] = [
  3,
  "2310 Bay Club Cir",
  false,
];
console.log(`randomData3: ${randomData3}`);
