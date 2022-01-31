export class User {
  id: number;
  name: string;
  firstname: string;
  mail: string;

  constructor(id: number, name: string, firstname: string, mail: string) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.mail = mail;
  }

}
