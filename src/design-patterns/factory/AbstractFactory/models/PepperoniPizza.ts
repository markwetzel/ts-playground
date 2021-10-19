import { Pizza } from "./Pizza";

export class PepperoniPizza extends Pizza {
  protected prepare(): void {
    throw new Error("Method not implemented.");
  }
}
