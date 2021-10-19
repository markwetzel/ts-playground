import { v4 as uuid } from "uuid";

export default abstract class Entity {
  protected _id: string;
  protected _name: string;
  protected _level: number;

  constructor(name: string, level: number) {
    this._id = uuid();
    this._name = name;
    this._level = level;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  public get level(): number {
    return this._level;
  }
}
