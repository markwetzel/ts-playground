import { ThrowingStar } from "../Item/Weapon/Ranged/ThrowingStar";
import { FalconBow } from "../Item/Weapon/Ranged/FalconBow";
import Item from "../Item/Item";
import { ItemFactory } from "./ItemFactory";

export class RangedWeaponFactory extends ItemFactory {
  protected createItem(type: string): Item | null {
    switch (type) {
      case "FalconBow":
        return new FalconBow();
      case "ThrowingStar":
        return new ThrowingStar();
      default:
        return null;
    }
  }
}
