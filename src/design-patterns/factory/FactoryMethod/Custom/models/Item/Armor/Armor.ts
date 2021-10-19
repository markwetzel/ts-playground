import { Item } from "../Item";

export abstract class Armor extends Item {
  private _defenseRating: number;

  constructor(
    name: string,
    level: number,
    defenseRating: number,
    weight: number
  ) {
    super(name, level, weight);
    this._defenseRating = defenseRating;
  }

  public get defenseRating(): number {
    return this._defenseRating;
  }
}
