import { Injectable } from '@angular/core';
import { ConfigTimmerModel } from '../model/ConfigTimmerModel';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  selectedTimerPosition: number = 0;
  private listaTemporizadores: ConfigTimmerModel[] = [];
  constructor() { 
    this.createTimmer();
  }

  createTimmer() {
    let count = this.listaTemporizadores.length;
    //alert(count);
    let nt = new ConfigTimmerModel(0,count);
    this.listaTemporizadores.push(nt);
  }

  deleteTimmer() {
 this.listaTemporizadores.splice(this.selectedTimerPosition,1);
  }

  deseleccionarTimmer() { 
    //alert("Posicion temporizador en uso:"+this.selectedTimerPosition );
    this.listaTemporizadores[this.selectedTimerPosition].classSelected = 'd-none';
    //this.selectedTimerPosition = -1;
  }

  contarTemporizadores() {
    return this.listaTemporizadores.length;
  }

  setTimmers(timmers: ConfigTimmerModel[]) {
    this.listaTemporizadores = timmers;
  }
  getTimmers() {
    return this.listaTemporizadores;
  }
}
