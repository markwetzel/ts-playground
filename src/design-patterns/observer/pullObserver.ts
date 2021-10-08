interface IMessage {
  body: string;
  sender: string;
  time: Date;
}

// Subject interface
interface IMailbox {
  clients: IClient[];
  messages: IMessage[];
  getLatestMessage(): IMessage;
  getClientCount(): number;
  receiveMessage(message: IMessage): void;
  registerObserver(client: IClient): void;
  unregisterObserver(client: IClient): void;
  notifyObservers(): void;
}

// Observer interface
interface IClient {
  sendMessage(message: string): void;
  update(): void;
}

// Concrete subject
class Mailbox implements IMailbox {
  clients: IClient[];
  messages: IMessage[];

  public getLatestMessage(): IMessage {
    return this.messages[this.messages.length - 1];
  }

  constructor() {
    this.clients = [];
    this.messages = [];
  }

  getClientCount(): number {
    return this.clients.length;
  }

  receiveMessage(message: IMessage): void {
    this.messages = this.messages.concat(message);
    this.notifyObservers();
  }

  registerObserver(client: IClient): void {
    this.clients = this.clients.concat(client);
  }

  unregisterObserver(client: IClient): void {
    this.clients = this.clients.filter((c) => c !== client);
  }

  notifyObservers(): void {
    for (const client of this.clients) {
      client.update();
    }
  }
}

// Concrete observer
class ChatClient implements IClient {
  private _mailbox: IMailbox;
  private _name: any;

  constructor(mailbox: IMailbox, name: string) {
    this._mailbox = mailbox;
    this._mailbox.registerObserver(this);
    this._name = name;
  }

  sendMessage(message: string): void {
    this._mailbox.receiveMessage({
      body: message,
      sender: this._name,
      time: new Date(),
    });
  }

  // Observer-specific code
  update(): void {
    const { body, sender, time } = this._mailbox.getLatestMessage();
    console.log(`[${time.toLocaleTimeString()} ${sender}] ${body}`);
  }
}

const mailbox = new Mailbox();

const client1 = new ChatClient(mailbox, "Mark");
const client2 = new ChatClient(mailbox, "Dan");

client1.sendMessage("Tell 'em I'm coming, and hell's coming with me.");
client2.sendMessage("That's nice.");
