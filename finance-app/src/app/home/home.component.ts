import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isLogin = true;
  username = '';
  password = '';
  email = '';
  name = '';
  lastName = '';
  feedbackMessage = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (this.isLogin) {
      this.authService.login(this.username, this.password).subscribe({
        next: () => {
          this.feedbackMessage = 'Login effettuato con successo!';
        },
        error: () => {
          this.feedbackMessage = 'Errore nel login. Riprova.';
        },
      });
    } else {
      this.authService
        .register(
          this.username,
          this.password,
          this.email,
          this.name,
          this.lastName
        )
        .subscribe({
          next: () => {
            this.feedbackMessage =
              'Registrazione completata! Ora puoi accedere.';
            this.isLogin = true;
          },
          error: () => {
            this.feedbackMessage = 'Errore nella registrazione. Riprova.';
          },
        });
    }
  }

  toggleMode() {
    this.isLogin = !this.isLogin;
    this.feedbackMessage = '';
  }
}
