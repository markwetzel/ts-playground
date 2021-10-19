import { Pizza } from "../Pizza";

export class NYStyleClamPizza extends Pizza {
  constructor() {
    super();
    this._name = "NY Style Clam Pizza";
    this._dough = "Thin Crust Dough";
    this._sauce = "Marinara Sauce";

    this._toppings.push(
      "Grated Reggiano Cheese",
      "Hudson River's Finest Clams"
    );
  }
}
