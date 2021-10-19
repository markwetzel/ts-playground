import { Pizza } from "./Pizza";

export class ClamPizza extends Pizza {
  protected prepare(): void {
    throw new Error("Method not implemented.");
  }
}
