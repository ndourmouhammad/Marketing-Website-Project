import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FooterComponent, NgIf, ReactiveFormsModule],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  public sendEmail(e: Event) {
    e.preventDefault();

    if (!this.contactForm.valid) {
      console.log("Formulaire invalide !");
      return;
    }

    const formData = {
      nom: this.contactForm.value.nom,
      prenom: this.contactForm.value.prenom,
      email: this.contactForm.value.email,
      message: this.contactForm.value.message
    };

    emailjs.send(
      'service_9tv8duz',
      'template_gedirnv',
      formData,
      { publicKey: '-gdEe9S5r3r4wjq8x' }
    )
    .then(
      () => {
        // Afficher une alerte de succès
        Swal.fire({
          title: 'Message envoyé !',
          text: 'Votre message a été envoyé avec succès.',
          icon: 'success',
          timer: 3000, // Temps en millisecondes avant la fermeture
          showConfirmButton: false,
          customClass: {
            popup: 'bg-blue-600 text-white', // Adapter les couleurs ici
            title: 'text-lg font-bold',
          },
        });
        this.contactForm.reset(); // Réinitialiser le formulaire
      },
      (error: any) => {
        // Afficher une alerte d'erreur
        Swal.fire({
          title: 'Erreur !',
          text: 'Une erreur est survenue lors de l\'envoi de votre message.',
          icon: 'error',
          timer: 3000,
          showConfirmButton: false,
          customClass: {
            popup: 'bg-red-600 text-white', // Adapter les couleurs ici
            title: 'text-lg font-bold',
          },
        });
      }
    );
  }

}
