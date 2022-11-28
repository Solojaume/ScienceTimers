class ConfigTimmerModel implements IConfigTimmer {
    targetTime: any;
    interval: any;

    //Constructor
    constructor(targetTime: any) {
        this.targetTime = targetTime;
    }

    arrancarTimer() {

    }

    stopCountDown(){
        clearInterval(this.interval);
        this.finalizado.emit();
    }
    
    tickTock() {
        let targetTime = this.targetTime;
        let hours: any = targetTime / 3600;
        hours = Math.trunc(hours);
        targetTime = targetTime % 3600;
        //console.log("HOURS:",hours);

        let minutes: any = targetTime / 60;
        minutes = Math.trunc(minutes);
        targetTime = targetTime % 60;
        //console.log("Minutes:",minutes);

        let seconds = targetTime;
        //console.log("SEGUNDOS con decimales:",seconds);

    }

}