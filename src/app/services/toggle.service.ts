import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {

  showDivSubscription = new Subject<Boolean>();
  constructor() { }

   showHideDiv(showHide: Boolean){
    console.log('called');
    this.showDivSubscription.next(showHide);
   }
}
