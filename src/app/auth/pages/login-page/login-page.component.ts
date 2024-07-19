import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

}
