import { CheesePizza } from "./CheesePizza";
import { ClamPizza } from "./ClamPizza";
import { PepperoniPizza } from "./PepperoniPizza";
import { Pizza } from "./Pizza";
import PizzaStore from "./PizzaStore";
import { VeggiePizza } from "./VeggiePizza";

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    let pizza: Pizza | null = null;

    const ingredientFactory = new ChicagoPizzaIngredientFactory();

    switch (type) {
      case "cheese":
        pizza = new CheesePizza(ingredientFactory);
        pizza.name = "Chicago Style Deep Dish Cheese Pizza";

        break;
      case "veggie":
        pizza = new VeggiePizza(ingredientFactory);
        pizza.name = "Chicago Style Deep Dish Veggie Pizza";
        break;
      case "clam":
        pizza = new ClamPizza(ingredientFactory);
        pizza.name = "Chicago Style Deep Dish Clam Pizza";
        break;
      case "pepperoni":
        pizza = new PepperoniPizza(ingredientFactory);
        pizza.name = "Chicago Style Deep Dish Pepperoni Pizza";
        break;
    }

    return pizza;
  }
}
