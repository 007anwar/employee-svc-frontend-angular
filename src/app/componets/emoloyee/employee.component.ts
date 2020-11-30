import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public Employees:object[];
public url:String;
public deleteUrl:String;
public finalUrl:String;
 public updateUrl:String;

public pageNo:number;
  constructor(private _service:EmployeeService) {
    this.pageNo=0;
    this.url="http://localhost:8010/employee/all/";
    this.deleteUrl="http://localhost:8010/employee/";
    this.updateUrl="http://localhost:8010/employee/";
    
  }

  ngOnInit(): void {
   this.finalUrl=this.url+this.pageNo.toString();
  this.getEmployee(this.finalUrl)
  }
  
public nextPage():void{
  console.log("inrementing")
   this.pageNo=this.pageNo+1;
   console.log(this.pageNo)
   this.finalUrl=this.url+this.pageNo.toString();
   this.getEmployee(this.finalUrl)
   }
   
   public previousPage():void{
    console.log("decrementing")
     this.pageNo=this.pageNo-1;
     console.log(this.pageNo)
     if(this.pageNo<0)
     this.pageNo=0;
     this.finalUrl=this.url+this.pageNo.toString();
     this.getEmployee(this.finalUrl)
  
     }

public getEmployee(url):void{
  this._service.getEmployee(url).subscribe(response=>{
    this.Employees=response;
  },
  (error)=>{
    console.error(error);
  });
}

public updateEmployee(obj):any{
  this._service.updateEmployee(this.updateUrl,obj).subscribe(
    response=>{console.log(response);},
    (error)=>{
      console.error(error);
    });
  }

public deleteEmployee(id):void{
  console.log(this.deleteUrl+id)
  this._service.deleteEmployee(this.deleteUrl+id).subscribe(response=>{
    this.Employees=response;
  },
  (error)=>{
    console.error(error);
  });
  window.location.reload();
}

}
