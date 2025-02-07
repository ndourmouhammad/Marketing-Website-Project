import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: any[] = [];

  constructor() {
    // Charger les utilisateurs à partir de localStorage lors de l'initialisation
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  // Méthode pour vérifier si un utilisateur avec le même email et mot de passe existe
  loginUser(email: string, password: string): string | any {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      // Si l'utilisateur est trouvé, retourner les informations de l'utilisateur
      return user;
    } else {
      // Si l'utilisateur n'est pas trouvé, retourner un message d'erreur
      return 'Identifiants incorrects';
    }
  }

  // Méthode pour vérifier si un utilisateur avec le même email existe déjà
  emailExists(email: string): boolean {
    return this.users.some(user => user.email === email);
  }

  // Méthode pour ajouter un utilisateur et sauvegarder dans localStorage
  registerUser(userData: any): string | void {
    // Vérifier si l'email existe déjà
    if (this.emailExists(userData.email)) {
      return 'Email déjà utilisé';
    }

    this.users.push(userData);
    localStorage.setItem('users', JSON.stringify(this.users));  // Sauvegarder les utilisateurs dans localStorage
    console.log('Utilisateur enregistré:', userData);
  }

  // Méthode pour obtenir la liste des utilisateurs
  getUsers(): any[] {
    return this.users;
  }
}
