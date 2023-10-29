import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NumberValidator} from "../../validators/number.validator";
import {Employee} from "../../models/employee.model";
import {AlertType} from "../../enums/alert-type";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent {
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter<Employee>();
  isFormVisible: boolean = false;
  alertType: AlertType = AlertType.NONE;
  alertText: Map<AlertType, string> = new Map([
    [AlertType.SUCCESS, "Form submitted successfully!"],
    [AlertType.ERROR, "Form has invalid values!"],
    [AlertType.INFO, "Form has been reset!"]
  ]);

  employeeForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    workingExperience: new FormControl(null, [
      Validators.required,
      NumberValidator.negativeNumberValidator(),
      NumberValidator.decimalPlacesValidator(1)
    ])
  });

  toggleView(): void {
    this.isFormVisible = !this.isFormVisible;
    this.alertType = AlertType.NONE;
    this.employeeForm.reset();
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      const newEmployee: Employee = this.employeeForm.getRawValue();
      this.onAddEmployee.emit(newEmployee);
      this.alertType = AlertType.SUCCESS;
      this.employeeForm.reset();
    } else {
      this.alertType = AlertType.ERROR;
      Object.keys(this.employeeForm.controls).forEach(controlName => {
        const control = this.employeeForm.get(controlName);
        if (control && control.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  onReset(): void {
    this.alertType = AlertType.INFO;
  }
}
