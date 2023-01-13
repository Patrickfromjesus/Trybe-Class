"use strict";
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
var db = [];
var LocalDbModel = /** @class */ (function () {
    function LocalDbModel() {
    }
    LocalDbModel.prototype.create = function (character) {
        var createC = { id: LocalDbModel.id, name: character.name, specialMove: character.specialMove };
        db.push(createC);
        LocalDbModel.id++;
        console.log("INSERT INTO Characters VALUES name = " + character.name + ", specialMove = " + character.specialMove);
        return LocalDbModel.id;
    };
    LocalDbModel.prototype.findAll = function () {
        console.log("SELECT * FROM Characters");
        return db;
    };
    LocalDbModel.prototype.findByIndex = function (findIndex) {
        console.log("SELECT * FROM Characters WHERE id = " + findIndex);
        return db[findIndex];
    };
    LocalDbModel.prototype.update = function (findIndex, characterInfos) {
        var name = characterInfos.name, specialMove = characterInfos.specialMove;
        db.splice(findIndex, 1, { id: findIndex, name: name, specialMove: specialMove });
        console.log("UPDATE Characters SET name = " + name + ", specialMove = " + specialMove + " WHERE id = " + findIndex);
        return db[findIndex];
    };
    LocalDbModel.prototype.destroy = function (findIndex) {
        console.log("DELETE FROM Characters WHERE id = " + findIndex);
        db.splice(findIndex, 1);
        return 'Deleted';
    };
    LocalDbModel.id = 0;
    return LocalDbModel;
}());
;
var CharacterService = /** @class */ (function () {
    function CharacterService() {
        this.CharacterModel = new LocalDbModel();
    }
    CharacterService.prototype.getAll = function () {
        var data = this.CharacterModel.findAll();
        return data;
    };
    CharacterService.prototype.getOne = function (id) {
        var data = this.CharacterModel.findByIndex(id);
        return data;
    };
    CharacterService.prototype.createCharacter = function (c) {
        var data = this.CharacterModel.create(c);
        return data;
    };
    CharacterService.prototype.updateCharacter = function (i, c) {
        var data = this.CharacterModel.update(i, c);
        return data;
    };
    CharacterService.prototype.destroyCharacter = function (i) {
        var data = this.CharacterModel.destroy(i);
        return data;
    };
    return CharacterService;
}());
var scorpion = {
    name: 'Scorpion',
    specialMove: 'Come over here!',
};
var characterService = new CharacterService();
var getAll = function () {
    var data = characterService.getAll();
    console.log(data);
};
getAll();
var getOne = function (id) {
    var data = characterService.getOne(id);
    console.log(data);
};
getOne(0);
var create = function (c) {
    var data = characterService.createCharacter(c);
    console.log(data);
};
create(scorpion);
var madara = {
    name: 'Madara',
    specialMove: 'Sharingan',
};
var update = function (i, c) {
    var data = characterService.updateCharacter(i, c);
    console.log(data);
};
update(0, madara);
var destroy = function (i) {
    var data = characterService.destroyCharacter(i);
    console.log(data);
};
destroy(0);
/* class MockedDbModel implements IModel {

} */ 
