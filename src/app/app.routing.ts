import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

// Layouts
import {MedicinesComponent} from './components/medicines/medicines.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'medicines',
    pathMatch: 'full',
  },
  {
    path: 'medicines',
    component: MedicinesComponent,
    data: {
      title: 'medicines'
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
