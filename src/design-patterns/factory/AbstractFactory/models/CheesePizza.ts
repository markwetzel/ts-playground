import { Pizza } from "./Pizza";

export class CheesePizza extends Pizza {
  protected prepare(): void {
    throw new Error("Method not implemented.");
  }
}
