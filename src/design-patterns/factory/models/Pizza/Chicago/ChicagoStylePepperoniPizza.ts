import Pizza from "../Pizza";
export default class ChicagoStylePepperoniPizza extends Pizza {
  constructor() {
    super();
    this._name = "Chicago Style Deep Dish Pepperoni Pizza";
    this._dough = "Extra Thick Crust Dough";
    this._sauce = "Plum Tomato Sauce";

    this._toppings.push("Shredded Mozzarella Cheese", "Chicago Pepperoni");
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}
