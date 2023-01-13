/* class Animal {
  constructor(public name: string) {}

  move() {
    console.log(`${this.name} está se movendo.`);
  }
};

class Mammal extends Animal {
  move() {
    super.move();
    console.log(`${this.name} está mamando.`);
    
  }
};

class Bird extends Animal {
  move() {
    console.log(`${this.name} está voando.`);
  }
}

class Aquamarine extends Animal {
  move() {
   console.log(`${this.name} está nadando.`);
  }
}

const animal = new Animal('homem');
const mammal = new Mammal('cachorro');
const bird = new Bird('papagaio');
const aquamarine = new Aquamarine('baleia');

function printMove(animal: Animal) {
  animal.move();
}

printMove(animal);
printMove(mammal);
printMove(bird);
printMove(aquamarine);

abstract class Animal {
  constructor(public name: string) {}

  move() {
    console.log(this.name + ' is walking...');
  }
  eat():void {}
}

class Cow extends Animal {
  private _age: number = 0;

  constructor(n: string, age: number) {
    super(n);
    this.age = age;
  }

  get age() { return this._age };

  set age(a: number) { this._age = a };

  eat() {
    console.log('Cow is eating...');
  }
};

const animal1 = new Cow('Cow', 10);
animal1.eat();
animal1.move();
console.log(animal1.age); */

/* abstract class Character {
  abstract talk(): void;
  abstract specialMove(): void; 
}

class MeleeCharacter extends Character {
  talk(): void {
    console.log('Eu sou um melee character');
  }

  specialMove(): void {
    console.log('*Mele Damage*');
  }
}

class LongRangeCharacter extends Character {
  talk(): void {
    console.log('Eu sou um longRang character');
  }

  specialMove(): void {
    console.log('*Long Rang Damage*');
  }
};

function apresentation(character: Character) {
  character.talk();
  character.specialMove();
  console.log('--------------------');

}

apresentation(new MeleeCharacter());
apresentation(new LongRangeCharacter()); */

/* interface Person {
  id: number;
  name: string;
  showIdentification(): void;
}

class PhysicalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cpf;

  constructor(name: string, cpf: string) {
    this._id = PhysicalPerson.newId();
    this._name = name;
    this._cpf = cpf;
  }

  private static newId() { return ++this.lastId; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cpf() { return this._cpf; }
  showIdentification() { console.log(this.id, this._cpf); }
}

class LegalPerson implements Person {
  private static lastId = 0;
  private _name;
  private _id;
  private _cnpj;

  constructor(name: string, cnpj: string) {
    this._id = LegalPerson.newId();
    this._name = name;
    this._cnpj = cnpj;
  }

  private static newId() { return ++this.lastId; }
  get id() { return this._id; }
  get name() { return this._name; }
  get cnpj() { return this._cnpj; }
  showIdentification() { console.log(this.id, this._cnpj); }
}

const pp0 = new PhysicalPerson('John', '123456789');
const pp1 = new PhysicalPerson('Jenny', '987654321');
const lp = new LegalPerson('International Sales SA', '834729384723');

const showIdentification = (person: Person) => {
  person.showIdentification();
}

showIdentification(pp0);
showIdentification(pp1);
showIdentification(lp);

class Contract<T> {
  static _number = 0;
  constructor(public broker: T){}
  static get number() { return this._number; }
}

const c2: Contract<LegalPerson> = new Contract(lp);
const c1: Contract<PhysicalPerson> = new Contract(pp0);
console.log(c1.broker.cpf); // Erro, pois não existe cpf em Person
console.log(c2.broker.cnpj); // Erro, pois não existe cnpj em Person
 */

interface ICharacter {
  name: string;
  specialMove: string;
}

interface DbCharacter extends ICharacter {
  id: number;
}

const db: DbCharacter[] = [];

interface IModel {
  create(c: ICharacter): void;
  findAll(): ICharacter[];
  findByIndex(id: number): ICharacter;
  update(i: number, c: ICharacter): void;
  destroy(id: number):void;
}

class LocalDbModel implements IModel {
  static id: number = 0;
  
  create(character: ICharacter) {
    const createC = { id: LocalDbModel.id, name: character.name, specialMove: character.specialMove };
    db.push(createC);
    LocalDbModel.id++;
    console.log(`INSERT INTO Characters VALUES name = ${character.name}, specialMove = ${character.specialMove}`);
    return LocalDbModel.id;
  }

  findAll(): ICharacter[] {
    console.log(`SELECT * FROM Characters`);
    return db;
  }

  findByIndex(findIndex: number) {
    console.log(`SELECT * FROM Characters WHERE id = ${findIndex}`);
    return db[findIndex];
  }
  update(findIndex: number, characterInfos: ICharacter) {
    const { name, specialMove } = characterInfos;
    db.splice(findIndex, 1, { id: findIndex, name, specialMove });
    console.log(`UPDATE Characters SET name = ${name}, specialMove = ${specialMove} WHERE id = ${findIndex}`);
    return db[findIndex];
  }
  destroy(findIndex: number) {
    console.log(`DELETE FROM Characters WHERE id = ${findIndex}`);
    db.splice(findIndex, 1);
    return 'Deleted';
  }
};

// CharacterService

class CharacterService {
  CharacterModel: LocalDbModel;
  
  constructor() {
    this.CharacterModel = new LocalDbModel();
  }

  getAll() {
    const data = this.CharacterModel.findAll();
    return data;
  }

  getOne(id: number) {
    const data = this.CharacterModel.findByIndex(id);
    return data;
  }

  createCharacter(c: ICharacter) {
    const data = this.CharacterModel.create(c);
    return data;
  }

  updateCharacter(i: number, c: ICharacter) {
    const data = this.CharacterModel.update(i, c);
    return data;
  }

  destroyCharacter(i: number) {
    const data = this.CharacterModel.destroy(i);
    return data;
  }
}

// characterController.ts

const characterService = new CharacterService();

const getAll = () => {
  const data = characterService.getAll();
  console.log(data);
};

const getOne = (id: number) => {
  const data =  characterService.getOne(id);
  console.log(data);
}

const create = (c: ICharacter) => {
  const data = characterService.createCharacter(c);
  console.log(data);
}

const update = (i: number, c: ICharacter) => {
  const data = characterService.updateCharacter(i, c);
  console.log(data);
}

const destroy = (i: number) => {
  const data = characterService.destroyCharacter(i);
  console.log(data);
}
