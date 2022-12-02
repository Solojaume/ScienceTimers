import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-autofocus',
  templateUrl: './modal-autofocus.component.html',
  styleUrls: ['./modal-autofocus.component.scss'],
})
export class ModalAutofocusComponent implements OnInit {
  @Input() tittle: string = 'Cambiar nombre temporizador';
  /* 
  @Input() strong1: string = '¿Estas seguro de quieres cambiar el nombre de este';
  @Input() spanStrong: string = ' "Temporizador" ';
  */
  @Input() strong2: string = '?';
  public formControl:FormControl = new FormControl();
  /*
  @Input() textoNormal: string =
    ' Esta imagen dejara de estar visible a otros usuarios y sera eliminada permanentemente.';
  @Input() textDanger: string =
    ' Esta operación no puede deshacerse.';
  */
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
