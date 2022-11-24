import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-timer-down',
  templateUrl: './timer-down.component.html',
  styleUrls: ['./timer-down.component.scss']
})
export class TimerDownComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //console.log(this.targetDate.getTime());
  }

  date: any;
  now: any;
  //targetDate: any = new Date(2022, 10, 24, 17, 21);
  targetTime: any = 10;
  interval!:any;
  months: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
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
    this.interval = setInterval(() => {
      this.tickTock();
      
      if(this.targetTime===0){
        this.stopCountDown();
      }
      this.targetTime = this.targetTime - 1;
    }, 1000);
  }

  stopCountDown(){
    clearInterval(this.interval);
  }

  tickTock() {
    let targetTime = this.targetTime;
    let hours: any = targetTime / 3600;
    console.log("HOURS con decimales:",hours);
    hours = Math.trunc(hours);
    targetTime = targetTime % 3600;
    console.log("HOURS:",hours);
    
    let minutes:any = targetTime / 60;
    minutes = Math.trunc(minutes);
    console.log("Minutes con decimales:",minutes);
    targetTime = targetTime % 60;
    console.log("Minutes:",minutes);

    let seconds = targetTime;
    console.log("SEGUNDOS con decimales:",seconds);

    //this.days.nativeElement.innerText = dias;
    this.hours.nativeElement.innerText = hours;
    this.minutes.nativeElement.innerText = minutes;
    this.seconds.nativeElement.innerText = seconds;
  }
}
