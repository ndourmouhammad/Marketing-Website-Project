import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FeatureComponent } from './components/feature/feature.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'features', component: FeatureComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**', component: NotFoundComponent },
];
