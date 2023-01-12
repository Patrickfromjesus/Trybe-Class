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

interface Logger {
  log (param: string): void; 
}

class ConsoleLogger implements Logger {
  log (param: string): void {
    console.log('logger1:', param);
  }
}

class ConsoleLogger2 implements Logger {
  log (param: string): void {
    console.log('loggeer2:', param);
  }
}

interface Database {
  logger: Logger;
  save (key: string, value: string): void;
}

class ExampleDatabase implements Database {
  constructor (public logger: Logger = new ConsoleLogger()) {}

  save (key: string, value: string) {
    this.logger.log(`${key} - ${value}`);
  }

  printLogger() {
    this.logger.log('print!');
  }
}

const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

const example1 = new ExampleDatabase(logger1);
const example2 = new ExampleDatabase(logger2);
const example3 = new ExampleDatabase();

example1.save('teste', '1');
example2.save('teste', '2');
example3.save('teste', '3');
example1.printLogger();

type Dog = {
  name: string;
  age: number;
}

const dog1: Dog = {
  name: 'Max',
  age: 10,
}

class Mae {
  nome: string = 'mãe';

  exibirNome() {
    console.log(this.nome);
  }
}

class Filha extends Mae {
  nome: string = 'filha';
}

function apresentar(objeto: Mae) {
  objeto.exibirNome();
}

const mae = new Mae();
const filha = new Filha();

apresentar(mae);
apresentar(filha);

interface USB {
  conectar(): void;
}

function printUsb(dispositivo: USB) {
  dispositivo.conectar();
}

const disp: USB = {
  conectar: () => console.log('Conectado'),
}

printUsb(disp);