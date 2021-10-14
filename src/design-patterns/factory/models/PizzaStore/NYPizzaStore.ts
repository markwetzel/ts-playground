import Pizza from "../Pizza/Pizza";
import PizzaStore from "./PizzaStore";
import NYStyleVeggiePizza from "../Pizza/NY/NYStyleVeggiePizza";
import NYStyleClamPizza from "../Pizza/NY/NYStyleClamPizza";
import NYStylePepperoniPizza from "../Pizza/NY/NYStylePepperoniPizza";
import NYStyleCheesePizza from "../Pizza/NY/NYStyleCheesePizza";

export default class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    switch (type) {
      case "cheese":
        return new NYStyleCheesePizza();
      case "pepperoni":
        return new NYStylePepperoniPizza();
      case "veggie":
        return new NYStyleVeggiePizza();
      case "clam":
        return new NYStyleClamPizza();
      default:
        return null;
    }
  }
}
