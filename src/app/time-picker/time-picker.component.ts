import { Component, EventEmitter, OnInit, Output, Type } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbTime } from '@ng-bootstrap/ng-bootstrap/timepicker/ngb-time';
import { ModalAutofocusComponent } from '../modal-autofocus/modal-autofocus.component';
import { ITime } from '../model/Interfaces/ITime';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  constructor() { }
  inputH = new FormControl(0);
  inputM = new FormControl(0);
  inputSeg = new FormControl(0);
  model: ITime = { hour: 0, minutos: 0, segundos: 0 };

  maxData: ITime ={ hour:100, minutos: 59, segundos: 59 };
  minData: ITime ={ hour: 0, minutos: 0, segundos: 0 };
  hourStep: number = 1;
  minutosStep: number = 1;
  segundosStep: number = 1;
  tiempoAContar: number = 0;

 @Output() salida:EventEmitter<ITime> = new EventEmitter<ITime>();
  ngOnInit(): void {
    this.inputH.valueChanges.subscribe((x:any)=>{
      console.log("HourC:",x);
      if(x<this.maxData.hour && x>=this.minData.hour){
        console.log(parseInt(x));
        let pased = x!=""?parseInt(x):0;
        this.model.hour = pased;
      }
    });
    this.inputM.valueChanges.subscribe((x:any)=>{
      console.log("MinutosC:",x);

      if(x<=this.maxData.minutos && x>=this.minData.minutos){
        console.log(parseInt(x));
        let pased = x!=""?parseInt(x):0;
        this.model.minutos = pased;
      }
    });
    this.inputSeg.valueChanges.subscribe((x:any)=>{
      console.log("SegundoC:",x);

      if(x<=this.maxData.segundos && x>=this.minData.segundos){
        console.log(parseInt(x));
        let pased = x!=""?parseInt(x):0;
        this.model.segundos = pased;
      }
    });
  }

  changeHour(step: number) {
    this.model.hour = this.model.hour + step;
    if (this.model.hour < this.minData.hour) {
      this.model.hour = this.maxData.hour;
    }
    if (this.model.hour > this.maxData.hour) {
      this.model.hour = this.minData.hour;
    }
    this.calcularSegundos();
    console.log("Hour:",this.model.hour);
  }

  changeMinutos(step: number) {
    this.model.minutos = this.model.minutos + step;
    if (this.model.minutos < this.minData.minutos) {//0
      this.model.minutos = this.maxData.minutos;
      if(this.model.hour>0){
        this.changeHour(-1);
      }
    } else if (this.model.minutos > this.maxData.minutos) {//60
      this.model.minutos = this.minData.minutos;//0
      this.changeHour(1);
    }
    this.calcularSegundos();
    console.log("minutos:",this.model.minutos);
  }

  changeSegundos(step: number) {
    this.model.segundos = this.model.segundos + step;
    if (this.model.segundos < this.minData.segundos) {
      this.model.segundos = this.maxData.segundos;
      if (this.model.minutos > this.minData.minutos)
        this.changeMinutos(- 1);
    }
    if (this.model.segundos > this.maxData.segundos) {
      this.model.segundos = this.minData.segundos;
      this.changeMinutos(1);
    }
    this.calcularSegundos();
    console.log("Segundos:",this.model.segundos);
  }
  
  calcularSegundos() {
    let segundosEnHora = 3600;
    let segundosEnMinutos = 60;
    this.model.tiempoAContar =
      this.model.hour * segundosEnHora +
      this.model.minutos * segundosEnMinutos +
      this.model.segundos;
    
    this.salida.emit(this.model);

  }

  
}

