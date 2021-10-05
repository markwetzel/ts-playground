// const enum is more efficient
// does not have to generate mappings in JS
// can only be accessed using a string literal
const enum Profession {
  Programmer,
  Support,
}

enum School {
  Harvard = "HARVARD", // Useful for debugging
  Yale = "YALE",
  Cornell = 1, // Can be number or string
}

const getAlumniDescription = (school: School): string => {
  switch (school) {
    case School.Cornell:
      return "Andy from the Office";
    case School.Harvard:
      return "Zuck";
    case School.Yale:
      return "Zack Morris";
  }
};

const school = School.Cornell;
console.log(getAlumniDescription(school));

console.log(Profession["Programmer"]);
