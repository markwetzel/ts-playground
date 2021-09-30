//? The any type is useful primarily in migrating codebases from JS to TS

//? 'notSure' can be of any type
let notSure: any;

//* ---------------------------------- Valid --------------------------------- */
notSure = 'Mark';
//? Redefining works
notSure = ['A', 'Valid', 'Array'];

const goodExample: any = 'This is a fine example.';

//! --------------------------------- Invalid -------------------------------- */
//? This will prevent compilation if 'noImplicitAny' is set in tsconfig.json
// function lyricGenerator(lyrics) {
// ...
// }

//? This works, however: any is explicit
function anotherOne(cantEatHot: any) {
  // ....
}
