import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list/car-list.component';
import { MaterialModule } from '../material/material.module';
import { CarRountingModule } from './car-routing.module';



@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CarRountingModule
  ]
})
export class CarModule { }
