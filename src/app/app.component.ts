import { Component, OnInit } from '@angular/core';
import { Message } from '@material-ui/icons';
import { User } from 'src/model/user';
import {EnrollmentService} from './services/enrollment.service'
import { ToggleService } from './services/toggle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  showDiv: Boolean = true;
  topics: string[] = ['Angular', 'React', 'Vue'];
  topicHasError = false;
  submitted = false;
  userModel = new User('','thm@gmail.com',7878777777,'default','morning',true);
  errorMsg ='';
  constructor(private enrollmentService: EnrollmentService , private toogleService: ToggleService){}

  validateTopic(value: string){
    if(value ==='default'){
      this.topicHasError = true;
    }else
    this.topicHasError = false;
  }

  ngOnInit() {
    
    this.toogleService.showDivSubscription.subscribe(value=>{
      this.showDiv = value ;
      console.log(value, 'second');
    });
  }
  onSubmit(){
    console.log(this.userModel);
    this.submitted= true;
    this.enrollmentService.enroll(this.userModel).subscribe(
      data=> console.log(data),
      error=> {
        console.log(error.message);
        this.errorMsg = error.message
      }
      )

  }

  toggleDiv(){
    console.log(this.showDiv, 'showDiv');
    this.showDiv = !this.showDiv;
    this.toogleService.showHideDiv(this.showDiv);
  }
}
