import Pizza from "../Pizza";

export default class NYStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this._name = "NY Style Pepperoni Pizza";
    this._dough = "Thin Crust Dough";
    this._sauce = "Marinara Sauce";

    this._toppings.push("Grated Reggiano Cheese", "Pepperoni");
  }
}
