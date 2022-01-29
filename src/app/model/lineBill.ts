import {Mission} from "./mission";

export class LineBill{
  id: number;
  amount: number;
  isValidated: boolean;
  amountWithoutTaxes : number;
  tva : number;
  date : Date;
  mission : Mission;
  country: string;
  idExpenseBill: number;
  description : string;
  category : string;
  registrationNumber : string;
  conveyance : string;
  vehicle : string;
  fiscalHorsePower : string;
  guestsName :string;
  rPlace :string
  hPlace : string;
  km : number;
  paymentMethod : string;




  constructor(id: number, amount: number, isValidated :boolean, tva:number, date:Date, mission: Mission, country: string, idExpenseBill: number,
              description : string, category :string, conveyance : string, registrationNumber : string, amountWithoutTaxes : number,
              vehicle :string, fiscalHorsePower:string, guestsNames : string, rPlace:string, hPlace :string, km: number, paymentMethod:string) {
    this.id = id;
    this.amount = amount;
    this.isValidated = isValidated;
    this.tva = tva;
    this.date = date;
    this.mission=mission;
    this.country = country;
    this.idExpenseBill = idExpenseBill;
    this.description = description;
    this.category= category;
    this.registrationNumber=registrationNumber;
    this.conveyance=conveyance;
    this.amountWithoutTaxes = amountWithoutTaxes;
    this.km=km;
    this.vehicle = vehicle;
    this.fiscalHorsePower=fiscalHorsePower;
    this.guestsName=guestsNames;
    this.rPlace=rPlace;
    this.hPlace=hPlace;
    this.paymentMethod=paymentMethod;
  }



}
