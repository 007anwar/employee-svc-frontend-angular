import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private _httpClient:HttpClient)
  {
  }
  public getEmployee(url):any{
   return this._httpClient.get(url);
  }
  public ceateEmployee(url,obj):any{
    return this._httpClient.post(url,obj);
   }
   public updateEmployee(url,obj):any{
    return this._httpClient.put(url,obj);
   }
   public deleteEmployee(url):any{
    return this._httpClient.delete(url)
   }
}