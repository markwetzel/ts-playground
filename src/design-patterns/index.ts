class Duck {
  private flyBehavior: IFlyBehavior;
  private quackBehavior: IQuackBehavior;
}

interface IFlyBehavior {
  fly(): void;
}

interface IQuackBehavior {
  quack(): void;
}
