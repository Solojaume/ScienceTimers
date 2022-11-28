import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { ConfigTimmerModel } from '../model/ConfigTimmerModel';

@Component({
  selector: 'app-timer-down',
  templateUrl: './timer-down.component.html',
  styleUrls: ['./timer-down.component.scss']
})
export class TimerDownComponent implements OnInit,OnChanges {
  @Input() configTimer:ConfigTimmerModel = new ConfigTimmerModel();
  @Output() finalizado = new EventEmitter<boolean>;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    //console.log(this.targetDate.getTime());
  }


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

  ngAfterViewInit() {
   
  }




}
