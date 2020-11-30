import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './componets/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './componets/update-employee/update-employee.component';
import { EmployeeComponent } from './componets/emoloyee/employee.component';


const routes: Routes = [
{path:'',redirectTo:'/read',pathMatch:'full'},
{path:'create',component:CreateEmployeeComponent},
{path:'update',component:UpdateEmployeeComponent},
{path:'read',component:EmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
