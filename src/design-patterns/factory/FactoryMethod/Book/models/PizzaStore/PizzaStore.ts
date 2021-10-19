import { Pizza } from "../Pizza/Pizza";

abstract class PizzaStore {
  public orderPizza(type: string): Pizza | null {
    let pizza: Pizza | null;

    pizza = this.createPizza(type);

    pizza?.prepare();
    pizza?.bake();
    pizza?.cut();
    pizza?.box();

    return pizza;
  }

  // Known as a parameterized factory method given the type parameter
  // used to create one of multiple types
  // 'type' could be changed to be an enum, object or static constant to be
  // more "type safe"
  protected abstract createPizza(type: string): Pizza | null;
}

export default PizzaStore;
