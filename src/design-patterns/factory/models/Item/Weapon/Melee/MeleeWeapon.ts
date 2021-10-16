import { Weapon } from "../Weapon";

export abstract class MeleeWeapon extends Weapon {
  constructor(
    name: string,
    level: number,
    attackPower: number,
    weight: number
  ) {
    super(name, level, attackPower, weight);
  }
}
