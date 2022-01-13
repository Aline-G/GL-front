export class LineBill{
  id: number;
  amount: number;
  isValidated: boolean;
  tvaPercent : number;
  tva : number;
  date : Date;
  // TODO atribut mission
  country: string;
  idExpenseBill: number;

  constructor(id: number, amount: number, isValidated :boolean, tvaPercent: number, tva:number, date:Date, country: string, idExpenseBill: number) {
    this.id = id;
    this.amount = amount;
    this.isValidated = isValidated;
    this.tvaPercent = tvaPercent;
    this.tva = tva;
    this.date = date;
    this.country = country;
    this.idExpenseBill = idExpenseBill;

  }



}
