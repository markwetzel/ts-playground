import IPrettyPrintable from "../IPrettyPrintable";

abstract class Pizza implements IPrettyPrintable {
  protected _name: string;
  protected _dough: string;
  protected _sauce: string;
  protected _toppings: string[];

  constructor() {
    this._toppings = [];
  }

  public prettyPrint(): string {
    const description = `
      ${this._name}
      Dough: ${this._dough}
      Sauce: ${this._sauce}
      Toppings: ${this._toppings.join(", ")}
    `;
    return description;
  }

  toString(): string {
    return this.prettyPrint();
  }

  public get name(): string {
    return this._name;
  }

  prepare(): void {
    console.log(`Preparing ${this._name}`);
    console.log(`Tossing dough...`);
    console.log(`Adding sauce...`);
    console.log(`Adding toppings: `);
    for (const topping of this._toppings) {
      console.log(` ${topping}`);
    }
  }

  bake(): void {
    console.log(`Bake for 25 minutes at 350`);
  }

  cut(): void {
    console.log(`Cutting the pizza into diagonal slices`);
  }

  box(): void {
    console.log(`Place pizza in official PizzaStore box`);
  }
}

export default Pizza;
