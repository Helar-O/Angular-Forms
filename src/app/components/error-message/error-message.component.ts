import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss']
})
export class ErrorMessageComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() field!: string;
  @Input() label?: string;
  messages: Map<string, string> = new Map();

  ngOnInit() {
    this.messages.set("required", this.label + " is required.");
    this.messages.set("email", "Invalid email");
    this.messages.set("notANumber", this.label + " is not a number.");
    this.messages.set("tooManyDecimalPlaces", "Too many decimal places.");
  }

  getFirstError(errors: any): string {
    if (errors) {
      const firstErrorKey = Object.keys(errors)[0];
      return this.messages.get(firstErrorKey) || "Invalid value.";
    }
    return '';
  }

}
