import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterPageAdminComponent } from './pages/master-page-admin/master-page-admin.component';
import { MasterTablesListComponent } from './components/master-tables-list/master-tables-list.component';
import { TableRecordsComponent } from './components/table-records/table-records.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MasterPageAdminComponent,
    MasterTablesListComponent,
    TableRecordsComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class MasterModule { }
