import {Mission} from "./mission";

export class LineBill{
  id: number;
  amount: number;
  isValidated: boolean;
  tvaPercent : number;
  tva : number;
  date : Date;
  mission : Mission;
  country: string;
  idExpenseBill: number;
  description : string;

  constructor(id: number, amount: number, isValidated :boolean, tvaPercent: number, tva:number, date:Date, mission: Mission, country: string, idExpenseBill: number, description : string) {
    this.id = id;
    this.amount = amount;
    this.isValidated = isValidated;
    this.tvaPercent = tvaPercent;
    this.tva = tva;
    this.date = date;
    this.mission=mission;
    this.country = country;
    this.idExpenseBill = idExpenseBill;
    this.description = description;
  }



}
