import Pizza from "../Pizza";

export default class CaliforniaStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this._name = "California Style Cheese Pizza";
    this._dough = "Wafer thin crust";
    this._sauce = "White sauce";

    this._toppings.push("Cruelty-free organic cheese product");
  }
}
