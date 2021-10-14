import Pizza from "../Pizza/Pizza";
import PizzaStore from "./PizzaStore";
import ChicagoStyleVeggiePizza from "../Pizza/Chicago/ChicagoStyleVeggiePizza";
import ChicagoStyleClamPizza from "../Pizza/Chicago/ChicagoStyleClamPizza";
import ChicagoStylePepperoniPizza from "../Pizza/Chicago/ChicagoStylePepperoniPizza";
import ChicagoStyleCheesePizza from "../Pizza/Chicago/ChicagoStyleCheesePizza";

export default class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza | null {
    switch (type) {
      case "cheese":
        return new ChicagoStyleCheesePizza();
      case "pepperoni":
        return new ChicagoStylePepperoniPizza();
      case "veggie":
        return new ChicagoStyleVeggiePizza();
      case "clam":
        return new ChicagoStyleClamPizza();
      default:
        return null;
    }
  }
}
