import {Component, OnInit} from '@angular/core';
import {Employee} from "../../models/employee.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService:EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((
      employees) => this.employees = employees);
  }

  addEmployee(employee:Employee): void {
    this.employeeService.addEmployee(employee).subscribe(
      employee => this.employees.push(employee)
    );
  }

  deleteEmployee(employee:Employee): void {
    this.employeeService.deleteEmployee(employee).subscribe(
      () => this.employees = this.employees.filter(
        (e) => e.id !== employee.id)
    )
  }
}
