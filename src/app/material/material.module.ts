import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [CardModule, ButtonModule, InputTextModule, CheckboxModule, RadioButtonModule, DropdownModule, ListboxModule, TableModule, ToastModule, ToolbarModule, DialogModule]
})
export class MaterialModule { }
