interface IInstrumental {
  name: string;
  play():void;
}

class Instrumental implements IInstrumental {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  play(): void {
    console.log(`Está tocando ${this.name}.`);
  }
}

class Guitar implements IInstrumental {
  constructor(public name: string) { };
  play() {
    console.log(`O guitarrista tá a todo vapor! - ${this.name}`);
  }
}

class Violin implements IInstrumental {
  constructor(public name: string) { };
  play() {
    console.log(`Só no dedilhado. - ${this.name}`);
  } 
}

class Musician {
  name: string
  instrumental: IInstrumental;
  
  constructor(n: string, i: IInstrumental = new Instrumental('flauta')) {
    this.name = n;
    this.instrumental = i
  }

  play() {
    this.instrumental.play();
    console.log(`${this.name} está tocando.`);
  }
}

const instrumental: Instrumental = new Instrumental('guitarra');
const guitar = new Guitar('Guitarra');
const violin = new Violin('violin');
const musician = new Musician('carlos', violin);
musician.play();