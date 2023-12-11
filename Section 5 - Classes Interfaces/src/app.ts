abstract class Department {
  static fiscalYear = 2023;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = name;
    // this.id = id;
    // can not use this.fiscalYear even if we are in the Department class cuz this -> refer to the instance that will
    //be created based on the class and the fiscalYear in static can be accessed only from the class, so we have to
    //type Department.fiscalYear to access it.
  }
  abstract describe(this: Department): void;
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
  describe() {
    console.log("hello from it department");
  }

  addEmployee(employee: string) {
    if (employee === "M16") {
      return;
    }
    this.employees.push(employee);
  }
}
class AccountingDepartment extends Department {
  private _lastReport!: string;
  private static instance: AccountingDepartment;
  private constructor(id: string, private reports: string[]) {
    super(id, "accounting");
  }
  // singleton pattern make sure u have one instance from the class (private constructor)
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("0", []);
    return this.instance;
  }
  get lastReport(): string {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error("no report found");
  }

  set lastReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }
  describe() {
    console.log("hello from it department");
  }
  addReport(report: string) {
    this.reports.push(report);
    this._lastReport = report;
  }
}
const it = new ITDepartment("1", ["M16"]);
it.describe();

it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
it.printEmployeeInformation();
console.log(it);
const AD = AccountingDepartment.getInstance();

AD.addReport("T-T");
AD.lastReport = "T-T";
console.log(AD.lastReport);
