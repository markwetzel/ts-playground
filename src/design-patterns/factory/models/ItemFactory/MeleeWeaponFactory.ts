import { MagicSword } from "./../Item/Weapon/Melee/MagicSword";
import { FireSword } from "../Item/Weapon/Melee/FireSword";
import Item from "../Item/Item";
import { ItemFactory } from "./ItemFactory";

export class MeleeWeaponFactory extends ItemFactory {
  protected createItem(type: string): Item | null {
    switch (type) {
      case "FireSword":
        return new FireSword();
      case "MagicSword":
        return new MagicSword();
      default:
        return null;
    }
  }
}
