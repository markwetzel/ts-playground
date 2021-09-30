//? Lack of a value
//? Another way to say undefined
//? Basically the opposite of any

//* ---------------------------------- Valid --------------------------------- */
//? Return type is implicitly void since nothing is returned
const log = () => {
  console.log('Hello, World');
};

//? It's also possible to explicitly define the return type
const sayNothing = (): void => {
  console.log('');

  //? More type safety! You can't return anything from this function
  //! Error
  // return 'See, I told you';

  //* Valid
  return;
};

//! --------------------------------- Invalid -------------------------------- */
