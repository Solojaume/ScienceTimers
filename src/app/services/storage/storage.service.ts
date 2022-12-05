import { Injectable } from '@angular/core';
import { TimerService } from '../timer.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  
  constructor(private timmerService:TimerService) { }
  
  saveTemporizadores(){
    localStorage.setItem("item",JSON.stringify(this.timmerService.getTimmers()));
  }
  
  getTemporizadores(){
    let object = localStorage.getItem("item");
    if(object !== null){
     this.timmerService.setTimmers(JSON.parse(object));
    }
  }

}
