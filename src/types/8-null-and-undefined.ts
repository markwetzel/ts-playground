let u: undefined = undefined;
let n: null = null;

let number: number = 7;

//! --------------------------------- Invalid -------------------------------- */
//? More type safety
//? This will not work with strictNullChecks set in tsconfig, preventing
//? method calls on 'undefined', for example
// number = null;
// number = undefined;

//? This also won't work now that strictNullChecks is set
// u = null;
// n = undefined;
