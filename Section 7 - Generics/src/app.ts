function merge<T extends {}, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const merged = merge({ name: "M17" }, { age: 19 });
console.log(merged.name);

//generic used when u don't care about the specific type but care about some constrains or to clearing to ts what is coming to it
interface Lengthy {
  length: number;
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "no text found";
  if (element.length == 1) {
    description = "u have 1 element.";
  } else if (element.length > 1) {
    description = "u got " + element.length + " elements";
  }
  return [element, description];
}

console.log(countAndDescribe("hello"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value " + obj[key];
}

console.log(extractAndConvert({ name: "M19" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item)) {
      this.data.slice(this.data.indexOf(item), 1);
    }
    return;
  }
  getItems() {
    return [...this.data];
  }
}
const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Max");
console.log(textStorage.getItems());
console.log("-------------");
interface CourseGoal {
  title: string;
  description: string;
}
class Course implements CourseGoal {
  constructor(public title: string, public description: string) {}
  static createCourse(title: string, d: string): CourseGoal {
    //Partial make all constrains in the interface in optional
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = d;
    return courseGoal as CourseGoal;
  }
}
const course1 = new Course("first course", "so fun XD");
console.log(course1.title);

const course2 = Course.createCourse("2nd Course", "o-O");
console.log(course2.description);

const name1: Readonly<string[]> = ["M16", "hatem"];
// name1.push('o-o')
