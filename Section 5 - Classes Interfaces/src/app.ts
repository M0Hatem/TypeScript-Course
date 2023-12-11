// type Addfn = (a: number, b: number) => number;
//create custom function type with interface
interface Addfn {
  (a: number, b: number): number;
}

let addfn: Addfn;
addfn = (number1: number, number2: number) => {
  return number1 + number2;
};

// u can extend interfaces, cool.
interface Named {
  readonly name?: string;
  outputName?: string;
  //optional function
  optionalFn?(): void;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

let user1: Greetable;

class Person implements Greetable {
  constructor(public name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + this.name);
    }
    console.log("hi");
  }
}

user1 = new Person("M16");

user1.greet("hello ");
