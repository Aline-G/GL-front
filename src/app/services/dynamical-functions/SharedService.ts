import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  clickOnBillEvent: EventEmitter<number> = new EventEmitter();
  clickOnAddBill: EventEmitter<boolean> = new EventEmitter();
  clickOnAlert: EventEmitter<string[]> = new EventEmitter();

  /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
  billDelete: EventEmitter<number[]> = new EventEmitter();
  lineBillDelete: EventEmitter<number[]> = new EventEmitter();
  advanceDelete: EventEmitter<number[]> = new EventEmitter();

}
