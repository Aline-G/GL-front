// @ts-ignore
// @ts-ignore

import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ExpenseBill} from "../model/expenseBill";
import {LineBill} from "../model/lineBill";
import {Mission} from "../model/mission";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private http: HttpClient) {
  }

  public getExpenseBillList() :  Observable<ExpenseBill[]>{
    return this.http.get<ExpenseBill[]>('/api/expensebill/list');
  }

  public getLineBillList(){
    return this.http.get<LineBill[]>('/api/linebill/list');
  }

  public getMissionList(){
    return this.http.get<Mission[]>('/api/mission/list');
  }

}
