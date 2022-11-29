import { Component, ElementRef, ViewChild } from '@angular/core';
import { ConfigTimmerModel } from './model/ConfigTimmerModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ScienceTimers';
  configTimmer: ConfigTimmerModel = new ConfigTimmerModel(0);
  
  empezar(){
    this.configTimmer = new ConfigTimmerModel(6);
    this.configTimmer.arrancarTimer();
  }
}
