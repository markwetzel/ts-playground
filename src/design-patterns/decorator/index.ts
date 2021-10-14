abstract class Beverage {
  description: string = "Unknown Beverage";
  abstract cost(): number;

  getDescription() {
    return this.description;
  }
}

abstract class CondimentDecorator extends Beverage {
  beverage: Beverage;

  abstract getDescription(): string;
}

class Espresso extends Beverage {
  constructor() {
    super();
    this.description = "Espresso";
  }

  cost(): number {
    return 1.99;
  }
}

class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  cost(): number {
    return 0.89;
  }
}

class DarkRoast extends Beverage {
  constructor() {
    super();
    this.description = "Dark Roast Coffee";
  }

  cost(): number {
    return 0.99;
  }
}

class Decaf extends Beverage {
  constructor() {
    super();
    this.description = "Decaf Coffee";
  }

  cost(): number {
    return 1.05;
  }
}

class Mocha extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  cost(): number {
    return this.beverage.cost() + 0.2;
  }
}

class Soy extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Soy";
  }

  cost(): number {
    return this.beverage.cost() + 0.15;
  }
}

class Whip extends CondimentDecorator {
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return this.beverage.getDescription() + ", Whip";
  }

  cost(): number {
    return this.beverage.cost() + 0.1;
  }
}

const beverage1 = new Espresso();
console.log(beverage1.getDescription() + " $" + beverage1.cost());

let beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log(beverage2.getDescription() + " $" + beverage2.cost());

let beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log(beverage3.getDescription() + " $" + beverage3.cost());
