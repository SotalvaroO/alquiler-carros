import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarListComponent } from "./car-list/car-list.component";


const routes: Routes = [
    {
        path:'',
        component:CarListComponent,
        children:[
            {
                path:'car-list',
                component:CarListComponent
            },
            {
                path:'**',
                redirectTo:'car-list'
            }
        ]
    }
];

@NgModule({
    declarations:[],
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class CarRountingModule{}