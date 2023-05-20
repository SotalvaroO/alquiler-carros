import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageAdminComponent } from './pages/master-page-admin/master-page-admin.component';

const routes: Routes = [
  {
    path:'',
    component:MasterPageAdminComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
