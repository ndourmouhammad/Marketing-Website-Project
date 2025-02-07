import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  features = [
    {
      image: 'https://images.unsplash.com/photo-1577259855408-c14a7b107540?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VuZWdhbHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Explorez des sites uniques',
      description: 'Accédez à une carte interactive pour découvrir des lieux étonnants et méconnus.'
    },
    {
      image: 'https://images.unsplash.com/photo-1588390801685-1432b35a975b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3VpZGUlMjB0b3VyaXN0aXF1ZSUyMG5vaXJ8ZW58MHx8MHx8fDA%3D',
      title: 'Rencontrez des guides passionnés',
      description: 'Trouvez des experts locaux pour vous accompagner dans vos aventures.'
    },
    {
      image: 'https://images.unsplash.com/photo-1417733403748-83bbc7c05140?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Réservez en toute simplicité',
      description: 'Réservez vos visites guidées et expériences en ligne, de manière rapide et sécurisée.'
    }
  ];

}
