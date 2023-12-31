import {Component, Input} from '@angular/core';
import {AlertType} from "../../enums/alert-type";

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent {
  @Input() text?: string;
  @Input() type: AlertType = AlertType.INFO;
  @Input() showAlert: boolean = false;

  alertIcon: Map<AlertType, string> = new Map([
    [AlertType.INFO, "bi-info-circle-fill"],
    [AlertType.SUCCESS, "bi-check-circle-fill"],
    [AlertType.ERROR, "bi-x-circle-fill"]
  ]);

  protected readonly AlertType = AlertType;
}
