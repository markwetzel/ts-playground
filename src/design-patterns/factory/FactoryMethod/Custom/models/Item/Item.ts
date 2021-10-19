import Entity from "./Entity";

export abstract class Item extends Entity {
  protected _weight: number;

  constructor(name: string, level: number, weight: number) {
    super(name, level);
    this._weight = weight;
  }

  public get weight(): number {
    return this._weight;
  }
}

export default Item;
