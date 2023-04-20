import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  showHideDiv: Boolean | undefined;
  constructor(private toggleService : ToggleService){

  }
 
  ngOnInit(){
    this.toggleService.showDivSubscription.subscribe(value=>{
      this.showHideDiv = value ;
      console.log(value, 'second');
    });
  }
}
