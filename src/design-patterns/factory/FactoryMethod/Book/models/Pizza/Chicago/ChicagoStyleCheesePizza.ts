import { Pizza } from "../Pizza";

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this._name = "Chicago Style Deep Dish Cheese Pizza";
    this._dough = "Extra Thick Crust Dough";
    this._sauce = "Plum Tomato Sauce";

    this._toppings.push("Shredded Mozzarella Cheese");
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}
