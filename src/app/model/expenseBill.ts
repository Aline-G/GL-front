import {LineBill} from "./lineBill";
import {Advance} from "./advance";

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
  date: string;
  state : BillStates;
  listLineBill: LineBill[];
  listAdvance: Advance[];

  constructor(id: number, name: string, description: string, amount: number, date: string, state: BillStates, listLineBill : LineBill[],listAdvance: Advance[]) {
   this.id=id;
   this.name=name;
   this.description=description;
   this.amount=amount;
   this.date=date;
   this.state= state;
   this.listLineBill = listLineBill;
   this.listAdvance = listAdvance;
  }
}
