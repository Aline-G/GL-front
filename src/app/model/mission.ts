export class Mission {
  id: number;
  name: string;
  description: string;
  date: Date;


  constructor(id: number, name: string, description: string, date: Date) {
    this.id=id;
    this.name=name;
    this.description=description;
    this.date=date;
  }
}
