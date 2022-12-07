import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ModalAutofocusComponent } from 'src/app/modal-autofocus/modal-autofocus.component';



@NgModule({
  declarations: [
    MenuComponent,
 
  ],
  imports: [
    CommonModule
  ],exports:[
    MenuComponent,
  ]
})
export class ComponentsModule { }
