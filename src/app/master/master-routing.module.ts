import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageAdminComponent } from './pages/master-page-admin/master-page-admin.component';
import { TableRecordsCarComponent } from './components/table-records-car/table-records-car.component';
import { TableRecordsCarRentComponent } from './components/table-records-car-rent/table-records-car-rent.component';

const routes: Routes = [
  {
    path: '',
    component: MasterPageAdminComponent,
    children: [
      {
        path: 'crear-carros',
        component: TableRecordsCarComponent
      },
      {
        path: 'crear-carros-alquiler',
        component: TableRecordsCarRentComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
