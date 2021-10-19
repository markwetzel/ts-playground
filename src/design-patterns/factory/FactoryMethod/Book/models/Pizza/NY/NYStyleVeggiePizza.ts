import { Pizza } from "../Pizza";

export class NYStyleVeggiePizza extends Pizza {
  constructor() {
    super();
    this._name = "NY Style Veggie Pizza";
    this._dough = "Thin Crust Dough";
    this._sauce = "Marinara Sauce";

    this._toppings.push(
      "Grated Reggiano Cheese",
      "Fresh Spinach",
      "Black Olives"
    );
  }
}
