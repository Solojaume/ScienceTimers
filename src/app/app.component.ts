import { Component, ElementRef, ViewChild, OnInit, Renderer2 } from '@angular/core';
import { ConfigTimmerModel } from './model/ConfigTimmerModel';
import { StorageService } from './services/storage/storage.service';
import { TimerService } from './services/timer.service';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

interface Alert {
	type: string,
	message: string
}
const alertControlUsuario: Alert[] = [
	{
		type: 'dark',
		message: 'Se te redirigira a la pagina de login en breves segundos',
	},
];
const alertControlSave: Alert[] = [
	{
		type: 'success',
		message: 'Se ha guardado correctamente los temporizadores',
	},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ScienceTimers';
  constructor(
    public timmerService: TimerService,
    private storageService: StorageService,
    private renderer2: Renderer2 
  ) { }
  keys: string[] = ["", ""];
  position = 0;
  alerts: Alert[] = [];

  ngOnInit(): void {
    this.renderer2.listen("document", "keydown", (event: any) => {
      const key = event.key; // "A", "1", "Enter", "ArrowRight"...
      if(
       key === "Control" 
        ){
          
        //alert("hey pájaro que te hemos pillao");
      }
      
      
      switch (this.position) {
        case 0:
          this.position = 1;
          break;
        default:
          this.position = 0;
          break;
      }
      this.keys[this.position] = key;
  
      if (
        this.keys[0] === "u" && this.keys[1] === "Control"
        || this.keys[1] === "u" && this.keys[0] === "Control"
        || this.keys[0] === "U" && this.keys[1] === "Control"
        || this.keys[1] === "U" && this.keys[0] === "Control")
      {
        event.preventDefault();
        event.stopPropagation();
        this.openAlert(alertControlUsuario);
      }else if (
        this.keys[0] === "s" && this.keys[1] === "Control"
        || this.keys[1] === "s" && this.keys[0] === "Control"
        || this.keys[0] === "S" && this.keys[1] === "Control"
        || this.keys[1] === "S" && this.keys[0] === "Control") {
        this.storageService.saveTemporizadores();
        this.openAlert(alertControlSave);
        event.preventDefault();
        event.stopPropagation();
      }

      console.log("Presionada: " + key);
    });
    this.renderer2.listen("document", "keyup", (event: any) => {
      event.preventDefault();
      event.stopPropagation();
      this.keys =  ["",""];
      this.position=0;
    });
    this.storageService.getTemporizadores();
  }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

  openAlert(alert:Alert[]) {
		this.alerts = Array.from(alert);
	}


  createTimer() {
    this.timmerService.createTimmer();
    this.storageService.saveTemporizadores();
  }

}
