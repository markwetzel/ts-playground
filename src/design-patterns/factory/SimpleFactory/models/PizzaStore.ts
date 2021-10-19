import { Pizza } from "./Pizza";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

class PizzaStore {
  private simplePizzaFactory: SimplePizzaFactory;

  constructor(simplePizzaFactory: SimplePizzaFactory) {
    this.simplePizzaFactory = simplePizzaFactory;
  }

  public orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null;

    pizza = this.simplePizzaFactory.createPizza(type);

    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();

    return pizza;
  }
}
