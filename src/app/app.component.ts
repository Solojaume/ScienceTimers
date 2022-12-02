import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigTimmerModel } from './model/ConfigTimmerModel';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ScienceTimers';

   
  constructor(public timmerService:TimerService){

  }
 
}
