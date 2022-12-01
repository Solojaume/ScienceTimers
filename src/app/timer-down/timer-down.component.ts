import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { ConfigTimmerModel } from '../model/ConfigTimmerModel';
import { ITime } from '../model/Interfaces/ITime';

@Component({
  selector: 'app-timer-down',
  templateUrl: './timer-down.component.html',
  styleUrls: ['./timer-down.component.scss']
})
export class TimerDownComponent {
  @Input() public configTimer:ConfigTimmerModel = new ConfigTimmerModel();
  @Output() finalizado = new EventEmitter<boolean>;
  constructor() { }
  public classSelected = "d-none";


  //targetDate: any = new Date(2022, 10, 24, 17, 21);
  
  /*
  currentTime: any = `${
    this.months[this.targetDate.getMonth()]
  } ${this.targetDate.getDate()}, ${this.targetDate.getFullYear()}`;
  */
  tiempo:any ;
  segundosConfigurables = true;
  ctrl = new FormControl();
  hourStep = 1;
	minuteStep = 1;
	secondStep = 30;
  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

 desplegar(){
  this.classSelected = "selected";
 }
 
 play(){
  alert("ALERTA SISMICA SE HA ESTABLECIDO UN TEMPORIZADOR DE 5segundos")
  this.configTimer.playTimmer(this.tiempo);
 }

 reset(){
  this.configTimer.resetTimmer();
 }

 pause(){
  this.configTimer.pausarTimmer();
 }

 finalizar(){
  this.configTimer.finalizarTimmer();
 }

 resume(){
  this.configTimer.arrancarTimer();
 }

 actualizarConfigTimer(datos:ITime){
  this.configTimer.hour = datos.hour;
  this.configTimer.minutos = datos.minutos;
  this.configTimer.segundos = datos.segundos;
  this.tiempo = datos.tiempoAContar;
 }

}
