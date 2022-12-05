import { IConfigTimmer } from "./Interfaces/IConfigTimmer";
import { IConfigTimmerStored } from "./Interfaces/IConfigTimmerStored";

export class ConfigTimmerModel implements IConfigTimmer,IConfigTimmerStored{
    targetTime: any;
    interval: any;
    hour: number = 0;
    minutos: number = 0;
    segundos: number = 0;
    audio:any;
    classSelected:string = "d-none";
    position!:number;
    nombre!:string;
    //Constructor
    constructor(targetTime: any = 5,position: number=0, nombre:string="Nombre temporizador (Haz click para cambiarlo)") {
        this.targetTime = targetTime - 1;
        this.position = position;
        this.nombre = nombre;
    }
    status: string = 'stop';

    playTimmer(time: any) {
        this.status= 'play';
        this.targetTime = time-1;
        this.arrancarTimer();
    }

    arrancarTimer() {
        this.status = 'play';
        this.interval = setInterval(() => {
            this.tickTock();

            if (this.targetTime === 0) {
                this.stopCountDown();
            }
            this.targetTime = this.targetTime - 1;
        }, 1000);
    }

    stopCountDown() {
        //clearInterval(this.interval);
        console.log("Temporizador finalizado");
        this.audio = new Audio('assets/alarm-clock.mp3');
        this.audio.play();
        this.status= 'finish';
    }

    pausarTimmer(){
        clearInterval(this.interval);
        this.status = 'pause';
    }

    resetTimmer(){
        clearInterval(this.interval);
        this.targetTime = 0;
        this.hour=0;
        this.minutos = 0;
        this.segundos=0;
        this.status='stop';
    }

    finalizarTimmer(){
        this.audio.pause();
        this.resetTimmer();
    }

    tickTock() {
        let targetTime = this.targetTime;
        this.hour = targetTime / 3600;
        this.hour = Math.trunc(this.hour);
        targetTime = targetTime % 3600;
        //console.log("HOURS:",hours);

        this.minutos = targetTime / 60;
        this.minutos = Math.trunc(this.minutos);
        targetTime = targetTime % 60;
        //console.log("Minutes:",minutes);

        this.segundos = targetTime;
        //console.log("SEGUNDOS con decimales:",seconds);

    }

}