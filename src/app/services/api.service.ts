// @ts-ignore
// @ts-ignore

import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExpenseBill} from "../model/expenseBill";
import {LineBill} from "../model/lineBill";
import {Advance} from "../model/Advance";
import {Mission} from "../model/mission";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) {
  }


  public createNewExpenseBill(noteName: string, noteDescription: string, noteDate : string) : Promise<ExpenseBill | undefined> {
    const params = new HttpParams().set('name', noteName).set('description', noteDescription).set('date', noteDate);
    return this.http.get<ExpenseBill>('/api/expensebill/new', {params}).toPromise();
  }

  public createNewLineBill(amount: number, tvaPercent: number, tva : number, date: string, description: string, idMission: number, idExpenseBill: number, country: string, category :string ) : Promise<LineBill | undefined> {
    const params = new HttpParams().set('amount', amount).set('tvaPercent', tvaPercent).set('tva', tva).set('date', date)
                    .set('description', description).set('idMission', idMission).set('idExpenseBill', idExpenseBill).set('country', country).set("category",category);
    return this.http.get<LineBill>('/api/linebill/new', {params}).toPromise();
  }


  public createNewAdvance(amount: number, description: string, name:string) : Promise<Advance | undefined> {
    const params = new HttpParams().set('amount', amount).set('description', description).set('name', name);
    return this.http.get<Advance>('/api/advance/new', {params}).toPromise();
  }


  public getExpenseBillList() :  Observable<ExpenseBill[]>{
    return this.http.get<ExpenseBill[]>('/api/expensebill/list');
  }

  public getLineBillListByExpenseId(id :number) :  Promise<LineBill[] | undefined>{
    const params = new HttpParams().set('id', id);
    return this.http.get<LineBill[]>('/api/linebill/listbyexpenseid', {params}).toPromise();
  }

  public getLineBillList(){
    return this.http.get<LineBill[]>('/api/linebill/list');
  }

  public getMissionList(){
    return this.http.get<Mission[]>('/api/mission/list');
  }

}
