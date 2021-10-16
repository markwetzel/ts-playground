import { Item } from "../Item";

export abstract class Weapon extends Item {
  protected _attackPower: number;

  public get attackPower(): number {
    return this._attackPower;
  }

  constructor(
    name: string,
    level: number,
    attackPower: number,
    weight: number
  ) {
    super(name, level, weight);
    this._attackPower = attackPower;
  }
}
