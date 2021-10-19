import { MeleeWeapon } from "./MeleeWeapon";

export abstract class OneHandedMeleeWeapon extends MeleeWeapon {
  constructor(
    name: string,
    level: number,
    attackPower: number,
    weight: number
  ) {
    super(name, level, attackPower, weight);
  }
}
