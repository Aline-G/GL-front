import {Mission} from "./mission";

enum BillStates {
  DRAFT = "DRAFT",
  WAITING = "WAITING",
  VALIDATED = "VALIDATED",
}



export class Advance {
  id: number;
  name: string;
  description: string;
  amount: number;
  state : BillStates;
  mission : Mission;
  date : Date;
  //listLineBill: LineBill[];

  constructor(id: number, date:Date, name: string, description: string, amount: number, state : BillStates, mission : Mission) {
   this.id=id;
   this.name=name;
   this.description=description;
   this.amount=amount;
   this.state= state;
    this.mission = mission;
    this.date =date;
   //this.listLineBill = listLineBill;
  }
}
