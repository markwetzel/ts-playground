import Pizza from "../Pizza/Pizza";

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

  protected abstract createPizza(type: string): Pizza | null;
}

export default PizzaStore;
