import { Component, ElementRef, ViewChild,OnInit } from '@angular/core';
import { ConfigTimmerModel } from './model/ConfigTimmerModel';
import { StorageService } from './services/storage/storage.service';
import { TimerService } from './services/timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ScienceTimers';

   
  constructor(
    public timmerService:TimerService,
    private storageService:StorageService
  ){}
  ngOnInit(): void {
    this.storageService.getTemporizadores();
  }
 
  createTimer(){
    this.timmerService.createTimmer();
    this.storageService.saveTemporizadores();
  }
}
