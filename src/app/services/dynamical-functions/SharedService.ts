import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  clickOnBillEvent: EventEmitter<number> = new EventEmitter();
}
