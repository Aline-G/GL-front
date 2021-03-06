import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpStatusCode} from '@angular/common/http';
import {ExpenseBill} from "../model/expenseBill";
import {LineBill} from "../model/lineBill";
import {Advance} from "../model/advance";
import {Mission} from "../model/mission";
import{User} from "../model/user";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) {
  }

  // ask the validation of a ExpenseBill
  public askValidation(id:number): Promise<ExpenseBill | undefined>{
    const params = new HttpParams().set('expenseBillId', id);
    return this.http.get<ExpenseBill>('/api/expensebill/sendValidation', {params}).toPromise();
  }


  // change the state
  public changeState(id:number, newState: string): Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('idMission', id).set('state', newState);
    return this.http.get<HttpStatusCode>('/api/mission/changestate', {params}).toPromise();
  }


  //Send the necessary informations from the pop-up to back-end to create a new advance
  public createNewAdvance(amount: number, description: string, name:string, idMission: number, idUser: number) : Promise<Advance | undefined> {
    const params = new HttpParams().set('amount', amount).set('description', description).set('name', name).set('userId', idUser).set('idMission',idMission);
    return this.http.get<Advance>('/api/advance/new', {params}).toPromise();
  }

  //Send the necessary informations from the pop-up to back-end to create a new Expense Bill
  public createNewExpenseBill(noteDescription: string, noteDate : string, userId: number) : Promise<ExpenseBill | undefined> {
    const params = new HttpParams().set('description', noteDescription).set('date', noteDate).set('userId',userId);
    return this.http.get<ExpenseBill>('/api/expensebill/new', {params}).toPromise();
  }

  //Send the necessary informations from the pop-up to back-end to create a new line Bill
  public createNewLineBill(amount: number, tva : number, date: string, description: string, idMission: number, idExpenseBill: number, country: string, category :string,
                           km : number, rPlace : string, hPlace :string, vehicle: string, guestsName : string, fiscal_horses_power:number, registrationNumber:string, conveyance :string, paymentMethod :string) : Promise<LineBill | undefined> {


    if(tva==undefined){
      tva = 0;
    }
    if(km == undefined){
      km=0;
    }
    if(rPlace == undefined){
      rPlace = "";
    }
    if(hPlace == undefined){
      hPlace = "";
    }
    if(vehicle == undefined){
      vehicle = "";
    }
    if(guestsName == undefined){
      guestsName = "";
    }
    if(fiscal_horses_power == undefined){
      fiscal_horses_power = 0;
    }
    if(registrationNumber == undefined){
      registrationNumber = "";
    }
    if(conveyance == undefined){
      conveyance = "";
    }
    if(paymentMethod == undefined){
      paymentMethod = "";
    }

    const params = new HttpParams().set('amount', amount).set('tva', tva).set('date', date)
      .set('description', description).set('idMission', idMission).set('idExpenseBill', idExpenseBill).set('country', country)
      .set("category",category).set("km",km).set("restoPlace",rPlace).set("hebergementPlace",hPlace).set("vehicle",vehicle)
      .set("guestsName",guestsName).set("fiscalHorsepower",fiscal_horses_power).set("registrationNumber",registrationNumber)
      .set("conveyance",conveyance).set('paymentMethod',paymentMethod)


    return this.http.get<LineBill>('/api/linebill/new', {params}).toPromise();

  }

  public createNewMission(missionName: string, dateBegining: string, dateEnding : string, description : string) : Promise<Mission | undefined> {
    const params = new HttpParams().set('name', missionName).set('dateBegining', dateBegining).set('dateEnding', dateEnding).set('description',description);
    return this.http.get<Mission>('/api/mission/new', {params}).toPromise();
  }

  public deleteExpenseBill(id : number) :  Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<HttpStatusCode>('/api/expensebill/delete', {params}).toPromise();
  }

  public deleteLineBill(id : number, expenseBillId: number) :  Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('id', id).set('expenseBillId',expenseBillId);
    return this.http.get<HttpStatusCode>('/api/linebill/delete', {params}).toPromise();
  }

  public deleteAdvance(id : number) :  Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<HttpStatusCode>('/api/advance/delete', {params}).toPromise();
  }


  //Get the current advance list from the back
  public getAdvanceBillList() :  Observable<Advance[]>{
    return this.http.get<Advance[]>('/api/advance/list');
  }

  //Get the amount for 'FRAIS_KILOMETRIQUES'
  public getAmountMealExpense(km :number, fiscalHorsePower : number) :  Promise<number | undefined>{
    const params = new HttpParams().set('nbKm', km).set('nbFiscalHorsepower',fiscalHorsePower);
    return this.http.get<number>('/api/linebill/calculamount',{params}).toPromise();
  }

  public getExpenseBillListByUserId(userId : number) :  Observable<ExpenseBill[]>{
    const params = new HttpParams().set('userId', userId);
    return this.http.get<ExpenseBill[]>('/api/expensebill/listbyuserid',{params});
  }

  public getAdvanceListByUserId(userId : number) :  Observable<Advance[]>{
    const params = new HttpParams().set('userId', userId);
    return this.http.get<Advance[]>('/api/advance/listbyuserid',{params});
  }



  //Get the current list of expense bill from the back
  public getExpenseBillList() :  Observable<ExpenseBill[]>{
    return this.http.get<ExpenseBill[]>('/api/expensebill/list');
  }

  // get the expenseBill which has this specific id
  public getExpenseBillWithId(id: number):  Promise<ExpenseBill | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<ExpenseBill>('/api/expensebill/getwithid',{params}).toPromise();
  }

  //Get the current line list from the back by id
  public getLineBillListByExpenseId(id :number) :  Promise<LineBill[] | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<LineBill[]>('/api/linebill/listbyexpenseid', {params}).toPromise();
  }

  //Get the current line list from the back
  public getLineBillList(){
    return this.http.get<LineBill[]>('/api/linebill/list');
  }

  //Get the current mission list from the back
  public getMissionList(){
    return this.http.get<Mission[]>('/api/mission/list');
  }

  //Get the current number of expense bills which are 'DRAFT' or 'WAITING'
  public getNumberBillsNonValidated(userId: number): Promise<number>{
    const params = new HttpParams().set('userId', userId);
    // @ts-ignore
    return this.http.get<number>('/api/expensebill/numberNotesNonValidated', {params}).toPromise();
  }

  //Get the current total amount of expense bills which are 'DRAFT' or 'WAITING'
  public getTotalExpenseBill(userId: number): Promise<number>{
    const params = new HttpParams().set('userId', userId);
    // @ts-ignore
    return this.http.get<number>('/api/expensebill/total', {params}).toPromise();
  }

  public askAdvanceValidation(id:number): Promise<Advance | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<Advance>('/api/advance/askforvalidation', {params}).toPromise();
  }

  public advanceValidation(id:number): Promise<Advance | undefined>{
    const params = new HttpParams().set('advanceId', id);
    return this.http.get<Advance>('/api/advance/validation',{params}).toPromise();
  }

  public advanceRefusal(id:number): Promise<Advance | undefined>{
    const params = new HttpParams().set('advanceId', id);
    return this.http.get<Advance>('/api/advance/refusal',{params}).toPromise();
  }

  public lineBillValidation(id:number): Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('lineBillId', id);
    return this.http.get<HttpStatusCode>('/api/linebill/validation',{params}).toPromise();
  }

  public lineBillRefusal(id:number): Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('lineBillId', id);
    return this.http.get<HttpStatusCode>('/api/linebill/refusal',{params}).toPromise();
  }

  public expenseBillValidation(id : number):Promise<ExpenseBill | undefined>{
    const params = new HttpParams().set('expenseBillId', id);
    return this.http.get<ExpenseBill>('/api/expensebill/validation',{params}).toPromise();
  }

  public expenseBillRefusal(id : number):Promise<ExpenseBill | undefined>{
    const params = new HttpParams().set('expenseBillId', id);
    return this.http.get<ExpenseBill>('/api/expensebill/refusal',{params}).toPromise();
  }

  public getUserList(){
    return this.http.get<User[]>('/api/user/list');
  }

  public isManager(id : number) {
    const params = new HttpParams().set('id', id);
    return this.http.get<boolean>('/api/user/ismanager',{params});
  }

  public setActualUser(id:number) :Promise<HttpStatusCode | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<HttpStatusCode>('/api/actualuser/new',{params}).toPromise();
  }

  public getActualUser() {
    return this.http.get<number>('/api/actualuser/get');
  }


}
