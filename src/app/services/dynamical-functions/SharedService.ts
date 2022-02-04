import {EventEmitter, Injectable} from "@angular/core";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  userId!:number;
  dialog!:MatDialog;



  clickOnBillEvent: EventEmitter<number> = new EventEmitter();
  clickOnAddBill: EventEmitter<boolean> = new EventEmitter();
  clickOnAlert: EventEmitter<string[]> = new EventEmitter();
  clickOnPlusEvent: EventEmitter<number> = new EventEmitter();
  clickOnChangeState: EventEmitter<number[]> = new EventEmitter();

  /*this function allows to delete a bill in confirmation delete component,
   the first argument is the id of the bill to delete and the second one is 0 which is a code to say that it's a bill*/
  billDelete: EventEmitter<number[]> = new EventEmitter();
  lineBillDelete: EventEmitter<number[]> = new EventEmitter();
  advanceDelete: EventEmitter<number[]> = new EventEmitter();

  logUser: EventEmitter<number> = new EventEmitter();


}
