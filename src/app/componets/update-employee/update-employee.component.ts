import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  public name:string;
  public email:string;
  public designation:string;
  public id:number;
  public url:string;
  constructor(private _service:EmployeeService) { 
    this.url="http://localhost:8010/employee";
  }

  ngOnInit(): void {
  }
  public updateEmployee(obj):any{
    this._service.updateEmployee(this.url,obj).subscribe(
      res=>console.log(res),
      (err:HttpErrorResponse)=>{
        console.error(err)
      }
    )
    }
}
