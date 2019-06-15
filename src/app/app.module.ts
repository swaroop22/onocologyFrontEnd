import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ModalModule, TooltipModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app.routing';
import {AddMedicineComponent} from './modals/addmedicine/addmedicine.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EditMedicineComponent} from './modals/editmedicine/editmedicine.component';
import {ServicesModule} from "./services/services.module";
import { DeleteMedicinecomponent } from './modals/deletemedicine/deletemedicinecomponent';
import {HttpModule} from '@angular/http';
import {MedicinesComponent} from './components/medicines/medicines.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicinesComponent,
    AddMedicineComponent,
    EditMedicineComponent,
    DeleteMedicinecomponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule,
    HttpModule
  ],
  entryComponents: [
    AddMedicineComponent,
    EditMedicineComponent,
    DeleteMedicinecomponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
