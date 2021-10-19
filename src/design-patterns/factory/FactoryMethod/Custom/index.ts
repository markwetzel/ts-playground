import { ArmorFactory } from "./models/ItemFactory/ArmorFactory";
import { MeleeWeaponFactory } from "./models/ItemFactory/MeleeWeaponFactory";
import { RangedWeaponFactory } from "./models/ItemFactory/RangedWeaponFactory";

const meleeWeaponFactory = new MeleeWeaponFactory();
const rangedWeaponFactory = new RangedWeaponFactory();
const armorFactory = new ArmorFactory();

const falconBow = rangedWeaponFactory.buildItem("FalconBow");
const throwingStar = rangedWeaponFactory.buildItem("ThrowingStar");

const fireSword = meleeWeaponFactory.buildItem("FireSword");
const magicSword = meleeWeaponFactory.buildItem("MagicSword");

const dragonScaleMail = armorFactory.buildItem("DragonScaleMail");

console.log(falconBow);
console.log(throwingStar);

console.log(fireSword);
console.log(magicSword);

console.log(dragonScaleMail);
