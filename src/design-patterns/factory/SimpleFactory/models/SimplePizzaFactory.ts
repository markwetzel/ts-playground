import { Pizza } from "./Pizza";
import { VeggiePizza } from "./VeggiePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { CheesePizza } from "./CheesePizza";

export class SimplePizzaFactory {
  createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;
    switch (type) {
      case "cheese":
        pizza = new CheesePizza();
        break;
      case "pepperoni":
        pizza = new PepperoniPizza();
        break;
      case "clam":
        pizza = new ClamPizza();
        break;
      case "veggie":
        pizza = new VeggiePizza();
        break;
    }
    return pizza;
  }
}
