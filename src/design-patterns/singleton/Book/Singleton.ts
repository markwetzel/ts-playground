import { v4 as uuid } from "uuid";

export class Singleton {
  private static _instance: Singleton;
  private _id: string;

  private constructor() {
    this._id = uuid();
  }

  public get id(): string {
    return this._id;
  }

  public static getInstance(): Singleton {
    if (!this._instance) {
      this._instance = new Singleton();
    }

    return this._instance;
  }
}
