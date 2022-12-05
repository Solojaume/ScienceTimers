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
    let nt = new ConfigTimmerModel(0, count);
    this.listaTemporizadores.push(nt);
  }

  deleteTimmer() {
    this.listaTemporizadores.splice(this.selectedTimerPosition, 1);
    for (let index = 0; index < this.listaTemporizadores.length; index++) {
      this.listaTemporizadores[index].position = index;
      this.selectedTimerPosition = 0;
    }
  }

  deseleccionarTimmer() {
    try {
      this.listaTemporizadores[this.selectedTimerPosition].classSelected = 'd-none';
    } catch (error) {
      
    }   
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
