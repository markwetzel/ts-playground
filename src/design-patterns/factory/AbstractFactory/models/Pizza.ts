import IPrettyPrintable from "../../../shared/IPrettyPrintable";

export abstract class Pizza implements IPrettyPrintable {
  protected _name: string;
  protected _dough: Dough;
  protected _sauce: Sauce;
  protected _cheese: Cheese;
  protected _pepperoni: Pepperoni;
  protected _clam: Clams;
  protected _veggies: Veggies[];

  public prettyPrint(): string {
    const description = `
      ${this._name}
      Dough: ${this._dough}
      Sauce: ${this._sauce}
      Veggies: ${this._veggies.join(", ")}
    `;
    return description;
  }

  toString(): string {
    return this.prettyPrint();
  }

  public get name(): string {
    return this._name;
  }

  public set name(v: string) {
    this._name = v;
  }

  // Protect is now abstract
  // (Differs from an implementation on FactoryMethod Pizza)
  protected abstract prepare(): void;

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
