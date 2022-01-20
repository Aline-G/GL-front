import {LineBill} from "./lineBill";

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
  //listLineBill: LineBill[];

  constructor(id: number, name: string, description: string, amount: number, state : BillStates) {
   this.id=id;
   this.name=name;
   this.description=description;
   this.amount=amount;
   this.state= state;
   //this.listLineBill = listLineBill;
  }
}
