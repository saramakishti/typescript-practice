class Vehicle {
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  //above code changed to this below as a shortcut
  constructor(public color: string) {}

  // public drive(): void {
  //   console.log('chugga chugga');
  // }
  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
// vehicle.honk(); NOT ALLOWED
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }
  //overriding a method on child class - do not change modifier
  private drive(): void {
    console.log('vroom');
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'red');
car.startDrivingProcess();
// car.honk(); NOT ALLOWED
