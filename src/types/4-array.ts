// Array without type annotation
const names = ['Mark', 'Daniel', 'Matthew'];
console.log(`names: ${names}`);

// Array with elements of type number with type annotation
const luckyNumbers: number[] = [3, 7, 42];
console.log(`luckyNumbers: ${luckyNumbers}`);

// Array with elements of mixed types with type annotation using union type
const randomData: (number | string | boolean)[] = [
  3,
  '2310 Bay Club Cir',
  false,
];
console.log(`randomData: ${randomData}`);
