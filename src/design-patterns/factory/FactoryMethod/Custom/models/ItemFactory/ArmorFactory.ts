import { DragonScaleMail } from "../Item/Armor/DragonScaleMail";
import { ChainArmor } from "../Item/Armor/ChainArmor";
import Item from "../Item/Item";
import { ItemFactory } from "./ItemFactory";

export class ArmorFactory extends ItemFactory {
  protected createItem(type: string): Item | null {
    switch (type) {
      case "ChainArmor":
        return new ChainArmor();
      case "DragonScaleMail":
        return new DragonScaleMail();
      default:
        return null;
    }
  }
}
