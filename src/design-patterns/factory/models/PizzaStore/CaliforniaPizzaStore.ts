import Pizza from "../Pizza/Pizza";
import PizzaStore from "./PizzaStore";
import CaliforniaStyleVeggiePizza from "../Pizza/California/CaliforniaStyleVeggiePizza";
import CaliforniaStyleClamPizza from "../Pizza/California/CaliforniaStyleClamPizza";
import CaliforniaStylePepperoniPizza from "../Pizza/California/CaliforniaStylePepperoniPizza";
import CaliforniaStyleCheesePizza from "../Pizza/California/CaliforniaStyleCheesePizza";

class CaliforniaPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    switch (type) {
      case "cheese":
        return new CaliforniaStyleCheesePizza();
      case "pepperoni":
        return new CaliforniaStylePepperoniPizza();
      case "veggie":
        return new CaliforniaStyleVeggiePizza();
      case "clam":
        return new CaliforniaStyleClamPizza();
      default:
        return null;
    }
  }
}
