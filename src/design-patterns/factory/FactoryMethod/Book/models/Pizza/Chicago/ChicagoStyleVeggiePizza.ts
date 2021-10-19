import { Pizza } from "../Pizza";

export class ChicagoStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this._name = "Chicago Style Deep Dish Veggie Pizza";
    this._dough = "Extra Thick Crust Dough";
    this._sauce = "Plum Tomato Sauce";

    this._toppings.push(
      "Shredded Mozzarella Cheese",
      "Fresh Spinach",
      "Black Olives"
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}
