/* export default function progressNotification(
  message: string,
  notificationType: string,
): void {
  const typesNotification = ['Email', 'Phone', 'Console', 'Batata'];
  console.log(typesNotification
    .includes(notificationType) ? `${notificationType}: ${message}` : message);
}

progressNotification('Tá funcionando!', 'Email');
progressNotification('Tá funcionando2!', 'Phone');
progressNotification('Tá funcionando3!', 'Console');
progressNotification('Tá funcionando4!', 'Batata'); */

// Notificator.ts

interface Notificator {
  sendNotification(message: string): void;
};

// ConsoleNotification.ts

export class ConsoleNotification implements Notificator {
  constructor(private name: string) { }

  sendNotification(message: string): void {
    console.log(`Here we go again! - ${message} from ${this.name}`);
  }
}

// EmailNotification.ts

export class EmailNotification implements Notificator {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  sendNotification(message: string): void {
    console.log(
      `Email: ${this.email} - ${message}`,
    );
  }
}

// PhoneNotification.ts

export class PhoneNotification implements Notificator {
  private phone: number;

  constructor(phone: number) {
    this.phone = phone;
  }

  sendNotification(message: string): void {
    console.log(
      `Phone: ${this.phone} - ${message}`,
    );
  }
}

export class ReadingTracker {
  private readingGoal: number;
  private booksRead: number;
  notificator: Notificator;
  constructor(readingGoal: number, notificator: Notificator) {
    this.notificator = notificator;
    this.readingGoal = readingGoal;
    this.booksRead = 0;
  }

  trackReadings(readsCount: number): void {
    this.booksRead += readsCount;
    if (this.booksRead >= this.readingGoal) {
      this.notificator.sendNotification(
        'Congratulations! You\'ve reached your reading goal!',
      );
      return;
    }
    this.notificator.sendNotification('There are still some books to go!');
  }
  // Aqui viriam mais métodos, que fogem o escopo deste exercício
}

const email = new EmailNotification('teste1@test.com');
const phone = new PhoneNotification(21987456713);
const console1 = new ConsoleNotification('Thiago Silva');
const readingTracker = new ReadingTracker(10, console1);
readingTracker.trackReadings(11);