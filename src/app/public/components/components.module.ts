import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ModalAutofocusComponent } from 'src/app/modal-autofocus/modal-autofocus.component';
import { TimePikerComponent } from './time-piker/time-piker.component';
import { TimerDownComponent } from './timer-down/timer-down.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        MenuComponent,
        TimePikerComponent,
        TimerDownComponent,
    ],
    exports: [
        MenuComponent,
        TimePikerComponent,
        TimerDownComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class ComponentsModule { }
