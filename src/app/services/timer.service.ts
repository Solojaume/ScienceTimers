import { Injectable } from '@angular/core';
import { ConfigTimmerModel } from '../model/ConfigTimmerModel';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  selectedTimerPosition: number = -1;
  private listaTemporizadores: ConfigTimmerModel[] = [new ConfigTimmerModel(0)];
  constructor() { }

  createTimmer() {
    let nt = new ConfigTimmerModel();
    this.listaTemporizadores.push(nt);
  }

  deleteTimmer() {

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
