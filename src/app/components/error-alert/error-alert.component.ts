import {Component, Input} from '@angular/core';
import {AlertType} from "../../enums/alert-type";

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
  styleUrls: ['./error-alert.component.scss']
})
export class ErrorAlertComponent {
  @Input() text?: string;
  @Input() type: AlertType = AlertType.NONE;

  protected readonly AlertType = AlertType;
}
