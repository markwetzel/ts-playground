import Pizza from "../Pizza";
export default class ChicagoStyleClamPizza extends Pizza {
  constructor() {
    super();
    this._name = "Chicago Style Deep Dish Clam Pizza";
    this._dough = "Extra Thick Crust Dough";
    this._sauce = "Plum Tomato Sauce";

    this._toppings.push(
      "Shredded Mozzarella Cheese",
      "Last Week's Lake Michigan Clams"
    );
  }

  cut(): void {
    console.log("Cutting the pizza into square slices");
  }
}
