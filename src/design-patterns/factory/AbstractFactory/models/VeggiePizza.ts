import { Pizza } from "./Pizza";

export class VeggiePizza extends Pizza {
  protected prepare(): void {
    throw new Error("Method not implemented.");
  }
}
