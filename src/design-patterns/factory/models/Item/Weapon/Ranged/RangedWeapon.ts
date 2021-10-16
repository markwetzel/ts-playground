import { Weapon } from "../Weapon";

export abstract class RangedWeapon extends Weapon {
  protected _range: number;

  public get range(): number {
    return this._range;
  }

  constructor(
    name: string,
    level: number,
    attackPower: number,
    range: number,
    weight: number
  ) {
    super(name, level, attackPower, weight);
    this._range = range;
  }
}
