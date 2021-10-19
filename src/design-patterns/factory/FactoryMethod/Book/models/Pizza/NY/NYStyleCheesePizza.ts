import { Pizza } from "../Pizza";

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this._name = "NY Style Cheese Pizza";
    this._dough = "Thin Crust Dough";
    this._sauce = "Marinara Sauce";

    this._toppings.push("Grated Reggiano Cheese", "Crushed Red Pepper");
  }
}
