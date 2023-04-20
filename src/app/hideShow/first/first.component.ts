import { Component, OnInit } from '@angular/core';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  showHideDiv:Boolean = true;
  constructor(private toggleService : ToggleService){

  }

  ngOnInit(){
    this.toggleService.showDivSubscription.subscribe(value=>{
      this.showHideDiv = value ;
      console.log(value, 'first');
    });
  }

}
