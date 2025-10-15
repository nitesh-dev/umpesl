import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VisibilityIcon } from "../../../shared/components/ui/icons/visibility-icon";

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, VisibilityIcon],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';
  rememberMe = false;

  onSubmit() {
    console.log({
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    });
  }
}
