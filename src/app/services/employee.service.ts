import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "../models/employee.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = "http://localhost:3000/employees";

  constructor(private http:HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee:Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  deleteEmployee(employee:Employee): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}/${employee.id}`);
  }
}
