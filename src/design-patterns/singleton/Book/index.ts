import { Singleton } from "./Singleton";

// Error - can't instantiate with private constructor
// const singleton = new Singleton();

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(`singleton1.id: ${singleton1.id}`);
console.log(`singleton2.id: ${singleton2.id}`);

console.log(`singleton1 === singleton2: ${singleton1 === singleton2}`);
