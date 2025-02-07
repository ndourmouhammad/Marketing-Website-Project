import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from '../login/login.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [FooterComponent, RouterLink, RegisterComponent, LoginComponent, NgIf],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
   // Variable qui détermine si on affiche l'inscription ou la connexion
   isRegistering: boolean = true;

   // Méthodes pour basculer entre les vues
   toggleAuthView() {
     this.isRegistering = !this.isRegistering;
   }
}
