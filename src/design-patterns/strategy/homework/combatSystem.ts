abstract class Character {
  // Encapsulate behavior that changes
  protected _weaponBehavior: WeaponBehavior;

  public get weaponBehavior(): WeaponBehavior {
    return this._weaponBehavior;
  }

  public set weaponBehavior(v: WeaponBehavior) {
    this._weaponBehavior = v;
  }

  fight(): void {
    console.log(
      `${this.constructor.name} is ${this._weaponBehavior.useWeapon()}`
    );
  }
}

class King extends Character {
  constructor() {
    super();
    this.weaponBehavior = new KnifeBehavior();
  }
}

class Queen extends Character {
  constructor() {
    super();
    this.weaponBehavior = new StaffBehavior();
  }
}

class Knight extends Character {
  constructor() {
    super();
    this.weaponBehavior = new AxeBehavior();
  }
}

class Troll extends Character {
  constructor() {
    super();
    this.weaponBehavior = new BowAndArrowBehavior();
  }
}

interface WeaponBehavior {
  useWeapon(): string;
}

class KnifeBehavior implements WeaponBehavior {
  useWeapon(): string {
    return `stabbing with a knife!`;
  }
}

class AxeBehavior implements WeaponBehavior {
  useWeapon(): string {
    return `swinging an axe!`;
  }
}

class BowAndArrowBehavior implements WeaponBehavior {
  useWeapon(): string {
    return `shooting an arrow from a bow!`;
  }
}

class StaffBehavior implements WeaponBehavior {
  useWeapon(): string {
    return "casting a spell with a staff! Lightning bolt!";
  }
}

const enemy = new Troll();
const party = [new King(), new Queen(), new Knight()];
const combatants = [enemy, ...party];

for (const character of combatants) {
  character.fight();
}

enemy.weaponBehavior = new StaffBehavior();

for (const character of combatants) {
  character.fight();
}
