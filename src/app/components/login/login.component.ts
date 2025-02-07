import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;



  constructor(private fb: FormBuilder, private userService: UserService,  private router: Router) {
    this.loginForm = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
      },
    );
  }


  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      const result = this.userService.loginUser(email, password);

      if (typeof result === 'object') {
        // Connexion réussie, rediriger vers la page d'accueil
        this.router.navigate(['/home']);
      } else {
        // Identifiants incorrects, afficher un message d'erreur
        this.errorMessage = result;
      }
    }
  }

}
