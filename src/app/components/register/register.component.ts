import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/users.service';


@Component({
  selector: 'app-register',
  imports: [NgIf, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  errorMessage: string | null = null;

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup): null | { passwordMismatch: true } {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Vérifier si l'email est déjà utilisé
      const error = this.userService.registerUser(this.registerForm.value);
      if (error) {
        this.errorMessage = error;  // Afficher l'erreur si l'email existe déjà
      } else {
        console.log('Form Submitted:', this.registerForm.value);
        this.registerForm.reset();
        this.errorMessage = null;  // Réinitialiser le message d'erreur
      }
    } else {
      console.log('Le formulaire est invalide');
    }
  }

  // Méthode pour afficher les utilisateurs enregistrés
  getUsers() {
    let data: any[] = [];
    data =  this.userService.getUsers();
    console.log('Utilisateurs enregistrés:', data);
  }
}
