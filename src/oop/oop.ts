import { v4 as uuid } from "uuid";

abstract class TrackableFitnessEntity {
  protected readonly _id: string;
  protected readonly _name: string;

  constructor(name: string) {
    this._name = name;
    this._id = uuid();
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }

  printFitnessDetails(): void {
    console.log(`\nID:\t\t${this.id}\nName:\t\t${this.name}`);
  }
}

abstract class LiftEntity extends TrackableFitnessEntity {
  private _reps: number;
  private _weight: number;

  constructor(name: string, reps: number, weight: number) {
    super(name);
    this._reps = reps;
    this._weight = weight;
  }

  public get weight(): number {
    return this._weight;
  }

  public set weight(v: number) {
    this._weight = v;
  }

  public get reps(): number {
    return this._reps;
  }

  public set reps(v: number) {
    this._reps = v;
  }

  printFitnessDetails(): void {
    super.printFitnessDetails();
    console.log(`Reps:\t\t${this.reps}\nWeight:\t\t${this.weight}`);
  }
}

class CardioEntity extends TrackableFitnessEntity {
  private _duration: number;

  constructor(name: string, duration: number) {
    super(name);
    this._duration = duration;
  }

  public get duration(): number {
    return this._duration;
  }

  public set duration(v: number) {
    this._duration = v;
  }

  printFitnessDetails(): void {
    super.printFitnessDetails();

    const hours = Math.floor(this.duration / 3600);
    const minutes = Math.floor((this.duration % 3600) / 60);
    const seconds = this.duration % 60;

    console.log(`Duration:\t${hours}h ${minutes}m ${seconds}s`);
  }
}

class Treadmill extends CardioEntity {
  constructor(duration: number) {
    super("Treadmill", duration);
  }
}

class Squat extends LiftEntity {
  constructor(reps: number, weight: number) {
    super("Squat", reps, weight);
  }
}

class Deadlift extends LiftEntity {
  constructor(reps: number, weight: number) {
    super("Deadlift", reps, weight);
  }
}

const treadmill = new Treadmill(6893);
const squat = new Squat(5, 225);
const deadlift = new Deadlift(3, 405);

squat.printFitnessDetails();
deadlift.printFitnessDetails();
treadmill.printFitnessDetails();
