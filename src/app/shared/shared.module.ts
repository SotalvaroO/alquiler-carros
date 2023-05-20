import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    TopBarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  exports:[TopBarComponent]
})
export class SharedModule { }
