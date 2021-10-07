/*
    * The Observer Pattern defines a one-to-many dependency between objects so that when
        one object changes state, all of its dependents are notified and updated automatically. 
    * One-to-many relationship (one subject to many observers)
    * Also known as PubSub (publisher/subscriber) or Event pattern
    * Subject is in charge of adding, removing, and notifying all its observers (dependents) of state changes
    * Observers can send add and removal requests to Subject 
 */

// Subject interface has three required methods:
// 1) registerObserver
// 2) removeObserver
// 3) notifyObservers
interface ISubject {
  observers: IObserver[];
  registerObserver(o: IObserver): void;
  removeObserver(o: IObserver): void;
  notifyObservers(): void;
}

// Observer interface has just one needed method, update
interface IObserver {
  update(birthdayEvent: IBirthdayEvent): void;
}

interface IBirthdayEvent {
  nameOfPerson: string;
  birthday: string;
}

// Concrete implementations of both interfaces
class Subject implements ISubject {
  observers: IObserver[] = [];
  birthdayEvent: IBirthdayEvent;

  constructor(...o: IObserver[]) {
    this.observers = o;
  }

  registerObserver(o: IObserver): void {
    this.observers = this.observers.concat(o);
    console.log(`[Register] ${o} subscribed to family`);
  }

  removeObserver(o: IObserver): void {
    this.observers = this.observers.filter((f) => f !== o);
    console.log(`[Remove] ${o} unsubscribed from family`);
  }

  notifyObservers(): void {
    for (const o of this.observers) {
      o.update(this.birthdayEvent);
    }
  }

  setNextBirthday(birthdayEvent: IBirthdayEvent) {
    this.birthdayEvent = birthdayEvent;

    this.notifyObservers();
  }
}

class Observer implements IObserver {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  constructor(name: string) {
    this._name = name;
  }

  public toString(): string {
    return this._name;
  }

  update(birthdayEvent: IBirthdayEvent): void {
    console.log(
      `[Notification for ${this._name}] Next Birthday is ${birthdayEvent.nameOfPerson}'s on ${birthdayEvent.birthday}`
    );
  }
}

// Subject
const family = new Subject();

// Observers
const mark = new Observer("Mark");
const dan = new Observer("Daniel");
const matt = new Observer("Matthew");
const jennifer = new Observer("Jennifer");
const rebecca = new Observer("Rebecca");
const observers = [rebecca, jennifer, mark, dan, matt];

// 1) Register the observers
for (const o of observers) {
  family.registerObserver(o);
}
console.log();

// 2) Update some state on Subject - in this case, the next birthday
family.setNextBirthday({ nameOfPerson: "Rebecca", birthday: "11/5/2021" });
console.log();

// 3) Unsubscribe someone from the Subject
family.removeObserver(jennifer);
console.log();

// 4) Update state again to confirm Jennifer has indeed been kicked out of family
family.setNextBirthday({ nameOfPerson: "Daniel", birthday: "12/11/2021" });
