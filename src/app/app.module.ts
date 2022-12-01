import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimerDownComponent } from './timer-down/timer-down.component';
import { TimePickerComponent } from './time-picker/time-picker.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAutofocusComponent } from './modal-autofocus/modal-autofocus.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerDownComponent,
    TimePickerComponent,
    ModalAutofocusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports:[
    TimePickerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
