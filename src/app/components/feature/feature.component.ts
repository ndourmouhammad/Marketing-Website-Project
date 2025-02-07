import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-feature',
  imports: [NgFor, FooterComponent],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css'
})
export class FeatureComponent {


  // Tableau des fonctionnalités
  fonctionnalites = [
    {
      titre: "Explorer des sites touristiques",
      description: "Découvrez les lieux emblématiques et cachés du Sénégal grâce à des guides détaillés et des photos captivantes.",
      image: "https://images.pexels.com/photos/9943304/pexels-photo-9943304.jpeg",
      lien: "#"
    },
    {
      titre: "Réserver des hôtels et restaurants",
      description: "Accédez aux meilleures offres d’hôtels et de restaurants à travers le Sénégal et effectuez vos réservations en ligne.",
      image: "https://img.freepik.com/photos-gratuite/femme-effectuant-reservation-ligne-par-telephone-parlant-par-telephone-fixe-pour-verifier-disponibilite-chambre-pour-nouvelle-reservation-receptionniste-feminine-aidant-futurs-clients-hotel_482257-61936.jpg?t=st=1738928524~exp=1738932124~hmac=bec62a4dd3b92dc9067f976655efc44f8d58cfd7d203e13295cd47a6b52f5339&w=1380",
      lien: "#"
    },
    {
      titre: "Avis et recommandations",
      description: "Lisez et partagez des avis sur vos expériences pour aider d'autres voyageurs à mieux planifier leurs séjours.",
      image: "https://img.freepik.com/vecteurs-libre/post-instagram-avis-client-waves_742173-5952.jpg?t=st=1738928584~exp=1738932184~hmac=9f1b85c69383ae5a6d823a61fe0fb0c6d6c9fdbee25388c08ce3398c2f546c92&w=826",
      lien: "#"
    },
    {
      titre: "Créer un itinéraire personnalisé",
      description: "Planifiez votre séjour en fonction de vos préférences et de vos centres d'intérêt pour une expérience unique.",
      image: "https://img.freepik.com/photos-gratuite/gardes-forestiers-faible-angle-tablette_23-2149557297.jpg?t=st=1738927757~exp=1738931357~hmac=149f2158ea79cce9de38404413ffd59ca0d5c6f69ffa10bece142b8b7574959e&w=1380",
      lien: "#"
    },
    {
      titre: "Partager vos expériences",
      description: "Partagez vos photos et vos récits de voyage avec la communauté pour inspirer d'autres voyageurs.",
      image: "https://img.freepik.com/photos-gratuite/plan-moyen-gens-discutant_23-2149033797.jpg?t=st=1738931749~exp=1738935349~hmac=76ce0539f14bd44a68556678237a2bf88ead89e45fa6deddffc09c5a2e156b32&w=1380",
      lien: "#"
    },
    {
      titre: "Connexion avec des guides locaux",
      description: "Rencontrez des guides locaux passionnés qui vous feront découvrir les secrets de leur région.",
      image: "https://img.freepik.com/photos-gratuite/heureux-joyeux-homme-afro-americain-voyageant-seul-dans-station-balneaire-europeenne-carte-papier-recherche-restaurants-auberges-proximite-aide-son-smartphone-habille-desinvolture_273609-750.jpg?t=st=1738928668~exp=1738932268~hmac=95f40b7a97184f5f1ba19e96c34d6636ce9d9367ff75d36acdbca95c91081532&w=1380",
      lien: "#"
    }
  ];
}
