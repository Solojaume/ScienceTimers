import { Injectable } from '@angular/core';
import { ConfigTimmerModel } from 'src/app/model/ConfigTimmerModel';
import { IConfigTimmerStored } from 'src/app/model/Interfaces/IConfigTimmerStored';
import { TimerService } from '../timer.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private timmerService: TimerService) { }

  saveTemporizadores() {
    let arrayTimmers = this.timmerService.getTimmers();
    let arrayAGuardar: any[] = [];

    for (let index = 0; index < arrayTimmers.length; index++) {
      const timmer = arrayTimmers[index];
      let timmerGuardado: IConfigTimmerStored = {
        nombre: timmer.nombre,
        position: timmer.position
      }

      arrayAGuardar.push(JSON.stringify(timmerGuardado));
    }
    localStorage.setItem("item", JSON.stringify(arrayAGuardar));
  }

  getTemporizadores() {
    let arrayTimmersGuardados = localStorage.getItem("item");
    if (arrayTimmersGuardados !== null) {
      arrayTimmersGuardados = JSON.parse(arrayTimmersGuardados);
      let object: ConfigTimmerModel[] = [];

      if (arrayTimmersGuardados !== null) {
        for (let index = 0; index < arrayTimmersGuardados.length; index++) {
          const element = JSON.parse(arrayTimmersGuardados[index]);
          object.push(new ConfigTimmerModel(5,element.position,element.nombre));
        }
      }
      this.timmerService.setTimmers(object);
    }
  }

}
