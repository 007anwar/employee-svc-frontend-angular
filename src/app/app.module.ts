import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './componets/emoloyee/employee.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './componets/create-employee/create-employee.component';
import {FormsModule} from '@angular/forms';
import { UpdateEmployeeComponent } from './componets/update-employee/update-employee.component';
import { RoutingModule } from './routing.module';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,RoutingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
