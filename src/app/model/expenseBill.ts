import {LineBill} from "./lineBill";

enum BillStates {
  DRAFT = "DRAFT",
  WAITING = "WAITING",
  VALIDATED = "VALIDATED",
}

export class ExpenseBill {
  id: number;
  name: string;
  description: string;
  amount: number;
  date: Date;
  state : BillStates;
  listLineBill: LineBill[];

  constructor(id: number, name: string, description: string, amount: number, date: Date, state: BillStates, listLineBill : LineBill[]) {
   this.id=id;
   this.name=name;
   this.description=description;
   this.amount=amount;
   this.date=date;
   this.state= state;
   this.listLineBill = listLineBill;
  }
}
