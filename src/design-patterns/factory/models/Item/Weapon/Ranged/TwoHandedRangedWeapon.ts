import { RangedWeapon } from "./RangedWeapon";

export abstract class TwoHandedRangedWeapon extends RangedWeapon {
  constructor(
    name: string,
    level: number,
    attackPower: number,
    range: number,
    weight: number
  ) {
    super(name, level, attackPower, range, weight);
  }
}
