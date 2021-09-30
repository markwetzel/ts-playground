//? Tuples are fixed-length arrays with type safety

// Tuple with elements of type string, number, and boolean with type annotation
let personInfo: [string, number, boolean] = ['Mark', 7, false];
console.log(`personInfo: ${personInfo}`);

//* ---------------------------------- Valid --------------------------------- */
//? Reassigning tuple with valid type order
personInfo = ['Dan', 42, true];
console.log(`personInfo: ${personInfo}`);

//? You can also use the any type in tuples, but declaration
//? order is still important
let petInfo: [any, any, string] = ['Miyagi', 10, 'Fat Cat'];
console.log(`petInfo: ${petInfo}`);

//? Since there's type safety provided by typescript, you will automatically
//? get hints for available method calls on each element in the tuple
console.log(petInfo[0]); //? No intellisense provided as type is any
console.log(`petInfo[2]: ${petInfo[2].toUpperCase()}`); //? Type is guaranteed
//? string so you get intellisense for toUpperCase, replace, etc

//! --------------------------------- Invalid -------------------------------- */
// Trying to reassign tuple with invalid type order
// personInfo = [69, false, 'Mark'];

// Tuple with elements of mixed types with type annotation using union type
const randomData3: (number | string | boolean)[] = [
  3,
  '2310 Bay Club Cir',
  false,
];
console.log(`randomData3: ${randomData3}`);
