import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { Pizza } from "./Pizza";
import PizzaStore from "./PizzaStore";
import { VeggiePizza } from "./VeggiePizza";

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    const ingredientFactory = new NYPizzaIngredientFactory();

    switch (type) {
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = "New York Style Cheese Pizza";

        break;
      case "veggie":
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = "New York Style Veggie Pizza";
        break;
      case "clam":
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = "New York Style Clam Pizza";
        break;
      case "pepperoni":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = "New York Style Pepperoni Pizza";
        break;
    }

    return pizza;
  }
}
