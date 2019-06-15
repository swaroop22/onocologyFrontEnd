import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PatientsService} from './patients.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    PatientsService
  ],
  declarations: []
})
export class ServicesModule {
}
