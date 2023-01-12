"use strict";
/* class SuperClass {
  constructor(public isSuper: boolean = true) {}

  public sayHello(): void {
    console.log('Hello, World!');
  }
}

class SubClass extends SuperClass {
  constructor() {
    super(false);
  }

  public sayHello2(): void {
    this.sayHello();
  }
}

const myFunc = (param: SuperClass) => {
  param.isSuper ? console.log('Super!') : console.log('Sub!');
}

const sub1 = new SubClass();
const super1 = new SuperClass();

myFunc(super1);
myFunc(sub1);

super1.sayHello();
sub1.sayHello2();

interface MyInterface {
  myNumber: number;
  myFunc(myparam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myparam: number): string {
      const result = this.myNumber + myparam;
      return `O resultado da soma é ${result}.`;
  }
};

const class1 = new MyClass(10);
console.log(class1.myNumber);
console.log(class1.myFunc(5));

type Infos = {
  name: string;
  age: number;
  email: string;
}

class Person {
  private _name: string;
  private _age: number;
  private _email: string;

  constructor() {
    this._name = '';
    this._age = 0;
    this._email = '';
  }

  public set email(newEmail: string) {
    this._email = newEmail;
  }

  public set name(newName: string) {
    this._name = newName;
  }

  public set age(newAge: number) {
    this._age = newAge;
  }

  public changeInfos(infos: Infos) {
    const { name, age, email } = infos;
    this._name = name;
    this._age = age;
    this._email = email;
  }
};

class Employee {
  private person1 = new Person(); //composition
  private _job: string;

  constructor(j: string, p?: Infos) {
    if (p) this.person1.changeInfos(p);
    this._job = j;
  }

  get person (): Person { return this.person1 };

  set person (infos: Infos) {
    this.person1.changeInfos(infos);
  }

  get job(): string {
    return this._job;
  }

  set job(newJob: string) {
    this._job = newJob;
  }
};

const infos: Infos = { name: 'person1', age: 20, email: 'person1@test.com' };

const employee = new Employee('doctor', infos);

console.log(employee.job);
console.log(employee.person);
employee.person = { ...infos, name: 'person2' };
console.log(employee.person);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (param) {
        console.log('logger1:', param);
    };
    return ConsoleLogger;
}());
var ConsoleLogger2 = /** @class */ (function () {
    function ConsoleLogger2() {
    }
    ConsoleLogger2.prototype.log = function (param) {
        console.log('loggeer2:', param);
    };
    return ConsoleLogger2;
}());
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase(logger) {
        if (logger === void 0) { logger = new ConsoleLogger(); }
        this.logger = logger;
    }
    ExampleDatabase.prototype.save = function (key, value) {
        this.logger.log(key + " - " + value);
    };
    ExampleDatabase.prototype.printLogger = function () {
        this.logger.log('print!');
    };
    return ExampleDatabase;
}());
var logger1 = new ConsoleLogger();
var logger2 = new ConsoleLogger2();
var example1 = new ExampleDatabase(logger1);
var example2 = new ExampleDatabase(logger2);
var example3 = new ExampleDatabase();
example1.save('teste', '1');
example2.save('teste', '2');
example3.save('teste', '3');
example1.printLogger();
var dog1 = {
    name: 'Max',
    age: 10,
};
var Mae = /** @class */ (function () {
    function Mae() {
        this.nome = 'mãe';
    }
    Mae.prototype.exibirNome = function () {
        console.log(this.nome);
    };
    return Mae;
}());
var Filha = /** @class */ (function (_super) {
    __extends(Filha, _super);
    function Filha() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nome = 'filha';
        return _this;
    }
    return Filha;
}(Mae));
function apresentar(objeto) {
    objeto.exibirNome();
}
var mae = new Mae();
var filha = new Filha();
apresentar(mae);
apresentar(filha);
function printUsb(dispositivo) {
    dispositivo.conectar();
}
var disp = {
    conectar: function () { return console.log('Conectado'); },
};
printUsb(disp);
