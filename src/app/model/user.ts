export class User {
  id: string;
  name: string;
  firstname: string;
  mail: string;

  constructor(id: string, name: string, firstname: string, mail: string) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.mail = mail;
  }

}
