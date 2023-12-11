interface Admin {
  name: string;
  privilege: string[];
}
interface Employee {
  name: string;
  date: Date;
}

interface ElevatedEmployee extends Admin, Employee {}

const e1: ElevatedEmployee = {
  name: "M16",
  privilege: ["create server"],
  date: new Date(),
};
console.log(e1.name);

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

type UnknownEmployee = Employee | Admin;
//this is type guard :
function printEmployeeInformation(emp: UnknownEmployee) {
  if ("privilege" in emp) {
    console.log("privilege :" + emp.privilege);
  }
  if ("date" in emp) {
    console.log("privilege :" + emp.date);
  }
}
printEmployeeInformation(e1);

class Car {
  drive() {
    console.log("driving....");
  }
}
class Truck {
  drive() {
    console.log("driving....");
  }
  loadCargo(amount: number) {
    console.log("loading cargo...." + amount);
  }
}

type vehicle = Car | Truck;
const num = 23;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

type Animal = Horse | Bird;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "horse":
      speed = animal.runningSpeed; // TypeScript knows that if type is 'bird', it has flyingSpeed
      console.log(`Flying at speed: ${speed}`);
      break;
    case "bird":
      speed = animal.flyingSpeed; // TypeScript knows that if type is 'fish', it has swimmingSpeed
      console.log(`Swimming at speed: ${speed}`);
      break;
    // Additional cases for other types
  }
  // rest of the function logic
}

// Usage
const bird: Animal = { type: "bird", flyingSpeed: 20 };
const fish: Animal = { type: "horse", runningSpeed: 10 };

moveAnimal(bird); // Outputs: Flying at speed: 20
moveAnimal(fish); // Outputs: Swimming at speed: 10

const input = document.getElementById("input");
if (input) {
  // console.log((input as HTMLInputElement).value);
}

// index properties used within an interface or type to define a property that can be accessed with a dynamic key
interface ErrorBag {
  [prop: string]: string;
}
const errors: ErrorBag = {
  email: "enter a valid email",
  username: "please start the user name with a letter",
};
console.log(errors.username);

function add(number1: number, number2: number): number;
function add(number1: Combinable, number2: Combinable) {
  if (typeof number2 === "string" || typeof number1 === "string") {
    return number1.toString() + number2.toString();
  }
  return +number1 + +number2;
}
const result = add(2, 3);

//nullish coalescing
const input1 = "";
const result1 = input1 ?? "DEFAULT";
