class NYPizzaIngredientFactory implements IPizzaIngredientFactory {
  createDough(): Dough {
    return new ThinCrustDough();
  }

  createSauce(): Sauce {
    return new MarinaraSauce();
  }

  createCheese(): Cheese {
    return new ReggianoCheese();
  }

  createVeggies(): Veggies[] {
    const veggies = [
      new Garlic(),
      new Onion(),
      new Mushroom(),
      new RedPepper(),
    ];
    return veggies;
  }

  createPepperoni(): Pepperoni {
    return new SlicedPepperoni();
  }

  createClam(): Clams {
    return new FreshClams();
  }
}
