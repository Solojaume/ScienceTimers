import { IConfigTimmer } from "./Interfaces/IConfigTimmer";

export class ConfigTimmerModel implements IConfigTimmer {
    targetTime: any;
    interval: any;
    hour: number = 0;
    minutos: number = 0;
    segundos: number = 0;
    //Constructor
    constructor(targetTime: any = 5) {
        this.targetTime = targetTime;
    }


    arrancarTimer() {
        this.interval = setInterval(() => {
            this.tickTock();

            if (this.targetTime === 0) {
                this.stopCountDown();
            }
            this.targetTime = this.targetTime - 1;
        }, 1000);
    }

    stopCountDown() {
        clearInterval(this.interval);
        console.log("Temporizador finalizado");
        const audio = new Audio('assets/temporizador.m4a');
        audio.play();
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