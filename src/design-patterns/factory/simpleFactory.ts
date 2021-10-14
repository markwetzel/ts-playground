class SimplePizzaFactory {
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

class Pizza {
  prepare(): void {}
  bake(): void {}
  cut(): void {}
  box(): void {}
}

class CheesePizza extends Pizza {}
class PepperoniPizza extends Pizza {}
class ClamPizza extends Pizza {}
class VeggiePizza extends Pizza {}

const simplePizzaFactory = new SimplePizzaFactory();

const pizza1 = simplePizzaFactory.createPizza("pepperoni");
const pizza2 = simplePizzaFactory.createPizza("veggie");

console.log(pizza1);
console.log(pizza2);
