import ChicagoPizzaStore from "./models/PizzaStore/ChicagoPizzaStore";
import NYPizzaStore from "./models/PizzaStore/NYPizzaStore";

const pizzaStore = new NYPizzaStore();
const pizza = pizzaStore.orderPizza("cheese");
console.log(pizza?.toString());

const pizzaStore2 = new ChicagoPizzaStore();
const pizza2 = pizzaStore2.orderPizza("cheese");
console.log(pizza2?.toString());
