import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
public name:string;
public email:string;
public designation:string;
public url:string;
  constructor(private _service:EmployeeService) { 
    this.url="http://localhost:8010/employee";
  }

  ngOnInit(): void {
  }
  public createEmployee(obj):any{
this._service.ceateEmployee(this.url,obj).subscribe(
  res=>console.log(res),
  (err:HttpErrorResponse)=>{
    console.error(err)
  }
)
}
}
