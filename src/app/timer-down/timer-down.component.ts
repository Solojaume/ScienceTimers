import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ConfigTimmerModel } from '../model/ConfigTimmerModel';

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

  @ViewChild('days', { static: true }) days!: ElementRef;
  @ViewChild('hours', { static: true }) hours!: ElementRef;
  @ViewChild('minutes', { static: true }) minutes!: ElementRef;
  @ViewChild('seconds', { static: true }) seconds!: ElementRef;

 desplegar(){
  this.classSelected = "selected";
 }
 
 play(){
  let tiempo = 5;
  alert("ALERTA SISMICA SE HA ESTABLECIDO UN TEMPORIZADOR DE 5segundos")
  this.configTimer.playTimmer(tiempo);
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


}
