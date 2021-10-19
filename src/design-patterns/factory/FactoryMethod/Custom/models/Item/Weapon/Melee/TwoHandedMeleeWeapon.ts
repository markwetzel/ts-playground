import { MeleeWeapon } from "./MeleeWeapon";

export abstract class TwoHandedMeleeWeapon extends MeleeWeapon {
  constructor(
    name: string,
    level: number,
    attackPower: number,
    weight: number
  ) {
    super(name, level, attackPower, weight);
  }
}
