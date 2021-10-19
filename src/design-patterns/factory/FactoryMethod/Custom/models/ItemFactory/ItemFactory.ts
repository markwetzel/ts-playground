import Item from "../Item/Item";

export abstract class ItemFactory {
  protected abstract createItem(type: string): Item | null;

  public buildItem(type: string): Item | null {
    const item = this.createItem(type);

    return item;
  }
}
