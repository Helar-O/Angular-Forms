import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Employee} from "../../models/employee.model";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss']
})
export class EmployeeProfileComponent {
  @Input() employee!: Employee;
  @Output() deleteEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();

  onDelete(employee:Employee): void {
    this.deleteEmployee.emit(employee);
  }
}
