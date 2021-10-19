import { SimplePizzaFactory } from "./models/SimplePizzaFactory";

const simplePizzaFactory = new SimplePizzaFactory();

const pizza1 = simplePizzaFactory.createPizza("pepperoni");
const pizza2 = simplePizzaFactory.createPizza("veggie");

console.log(pizza1);
console.log(pizza2);
