import { Pizza } from "./Pizza";

export class VeggiePizza extends Pizza {
  private _pizzaIngredientFactory: IPizzaIngredientFactory;

  constructor(pizzaIngredientFactory: IPizzaIngredientFactory) {
    super();
    this._pizzaIngredientFactory = pizzaIngredientFactory;
  }

  protected prepare(): void {
    console.log(`Preparing ${this._name}`);
    this._dough = this._pizzaIngredientFactory.createDough();
    this._sauce = this._pizzaIngredientFactory.createSauce();
    this._cheese = this._pizzaIngredientFactory.createCheese();
    this._veggies = this._pizzaIngredientFactory.createVeggies();
  }
}
