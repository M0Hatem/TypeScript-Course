//function‹T extends {new(..args: any[])}: {} <- important ig

//u can return something on accessors decorator and method decorator only

//function is a property with a function as a value

// decorator factories
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function AutoBind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalFn = descriptor.value;

  const adjustedDescriptor: PropertyDescriptor = {
    get() {
      const boundFn = originalFn.bind(this);
      return boundFn;
    },
  };

  return adjustedDescriptor;
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...arg: any[]): { name: string } }>(
    OriginalConstructor: T
  ) {
    return class extends OriginalConstructor {
      name = super.name;
      constructor(...args: any[]) {
        super(...args);
        console.log("rendering element");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}
// normal decorator
// function Logger(constructor: Function) {
//   console.log("loading");
//   console.log(constructor);
// }

interface HasVoice {
  voice: string;
}
interface Sus {
  isSus: boolean;
}
interface Normal extends HasVoice, Sus {}

@Logger("loading...") // decorator factory from up to down like normal fun
@WithTemplate("<h1>new Person Object</h1>", "good") // decorator down to up the (closest to the class)
class Person {
  name = "M16";
  // voice = "not bad";
  // isSus = true;
  constructor() {
    console.log("creating person object");
  }
}

const mohamed = new Person();
function Log(target: any, name: string) {
  console.log("property Decorator");
}

// method and accessor decorator are the same except property descriptor
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("accessor Decorator");
}

//name in argument accessor in  refer to the function that use that argument
function Log3(target: any, name: string, position: number) {
  console.log("parameter  Decorator");
  console.log(position);
}
class Product {
  @Log
  title: string;

  constructor(title: string, private _price: number) {
    this.title = title;
  }
  @Log2
  set price(value: number) {
    if (value < 0) {
      throw new Error("invalid enter positive value ");
    } else {
      this._price = value;
    }
  }
  getPriceWithTax(@Log3 tax: number) {
    return this._price * (1 * tax);
  }
}
class Printer {
  message = "hello from printer";

  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const btn = document.querySelector("button")!;
btn.addEventListener("click", p.showMessage);
