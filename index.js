"strict-mode";
class Vehicle {
  brand;
  model;
  year;
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  printSpecs() {
    console.log(
      `Designation: ${this.brand} ${this.model}\nYear built: ${this.year}`
    );
  }
}

class Car extends Vehicle {
  fuel;
  consumption;
  constructor(brand, model, year, fuel, consumption) {
    super(brand, model, year);
    this.fuel = fuel;
    this.consumption = consumption;
  }
  printSpecs() {
    console.log(
      `${this.type()}\n Designation: ${this.brand}\n ${
        this.model
      }\n Year built: ${this.year} Age: ${new Date().getFullYear() - this.year}`
    );
  }
  type() {
    return this.constructor.name;
  }
  drive(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.fuel -= this.consumption * seconds;

        return this.fuel < 0 ? reject(0) : resolve(this.fuel);
      }, 1000);
    });
  }
}

class Truck extends Vehicle {
  fuel;
  consumption;
  constructor(brand, model, year, fuel, consumption) {
    super(brand, model, year);
    this.fuel = fuel;
    this.consumption = consumption;
  }
  printSpecs() {
    console.log(
      `${this.type()}\n Designation: ${this.brand}\n ${
        this.model
      }\n Year built: ${this.year}\n Age: ${
        new Date().getFullYear() - this.year
      }`
    );
  }

  type() {
    return this.constructor.name;
  }

  drive(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.fuel -= this.consumption * seconds;

        return this.fuel < 0 ? reject(0) : resolve(this.fuel);
      }, 1000);
    });
  }
}

const bmw = new Vehicle("BMW", "M8", 2020);
bmw.printSpecs();

const mercedes = new Car("Mercedes", "Benz", "2020", 50, 12 / 100);
mercedes.printSpecs();
const volvo = new Truck("Volvo", "FH16", "2007", 200, 20 / 100);
volvo.printSpecs();

const vehicles = [
  new Car("Mercedes", "Benz", "2020", 50, 12 / 100),
  new Truck("Volvo", "FH", "2005", 300, 100 / 100),
  new Truck("Renault", "T high", "2022", 300, 90 / 100),
  new Car("Toyota", "Auris", "2013", 50, 4 / 100),
  new Car("Lamborghini", "gallardo", "2016", 100, 40 / 100),
];
let callDrive = vehicles.map((element) => element.drive(60));
console.log(callDrive);
