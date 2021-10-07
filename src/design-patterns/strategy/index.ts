// Key points:
// 1) Program to an interface, not an implementation
// 2) Favor composition over inheritance
// 3) Encapsulate what changes

abstract class Duck {
  // Encapsulate what changes
  protected flyBehavior: IFlyBehavior;
  protected quackBehavior: IQuackBehavior;

  // Setters allow for dynamic behavioral changes at runtime
  setFlyBehavior(flyBehavior: IFlyBehavior): void {
    this.flyBehavior = flyBehavior;
  }

  setQuackBehavior(quackBehavior: IQuackBehavior): void {
    this.quackBehavior = quackBehavior;
  }

  abstract display(): void;

  performFly(): void {
    this.flyBehavior.fly();
  }

  performQuack(): void {
    this.quackBehavior.quack();
  }

  swim(): void {
    console.log("Even decoys swim.");
  }
}

class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWings();
    this.quackBehavior = new Quack();
  }

  display(): void {
    throw new Error("I'm a real mallard duck. You jelly?");
  }
}

interface IFlyBehavior {
  fly(): void;
}

class FlyWithWings implements IFlyBehavior {
  fly(): void {
    console.log("Flying...with wings!");
  }
}

class FlyNoFly implements IFlyBehavior {
  fly(): void {
    console.log("I can't fly. :<");
  }
}

class FlyRocketPowered implements IFlyBehavior {
  fly(): void {
    console.log("Flying ROCKET POWERED OMG");
  }
}

interface IQuackBehavior {
  quack(): void;
}

class Quack implements IQuackBehavior {
  quack(): void {
    console.log("Quack!");
  }
}

class MuteQuack implements IQuackBehavior {
  quack(): void {
    console.log("<<crickets>>");
  }
}

class Squeak implements IQuackBehavior {
  quack(): void {
    console.log("Squeak!");
  }
}

const mallardDuck = new MallardDuck();
mallardDuck.performFly();
mallardDuck.performQuack();

mallardDuck.setFlyBehavior(new FlyRocketPowered());
mallardDuck.performFly();
mallardDuck.performQuack();
