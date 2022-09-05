class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
  carStats() {
    return `This car has ${this.doors} doors, an ${this.engine} engine, and a beautiful ${this.color} finish!`
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
    
  }
}

//Extending car class
class Suv extends Car {
  constructor(engine, doors, color, brand, carStats) {
    super(engine, doors, color, carStats);
    this.brand = brand;
    this.wheels = 4;
    this.ac = true;
  }
  myBrand() {
    return console.log(`This SUV is a ${this.brand}.`);
  }
}

const bmw328xi = new Car(4, "I6", "Monarch blue metallic");
const pilot = new Suv(4, "V6", "Dark cherry pearl", "Honda");

console.log(bmw328xi);
// console.log(bmw328xi.carStats());

function sayHi() {
  return console.log("This function can be declared anywhere because functions are hoisted to the top.")
};
sayHi();
console.log(pilot);
console.log(pilot.myBrand());