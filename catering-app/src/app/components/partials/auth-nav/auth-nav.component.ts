import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  templateUrl: './auth-nav.component.html',
  styleUrls: ['./auth-nav.component.css']
})
export class AuthNavComponent {
  constructor(public afAuth: AngularFireAuth, private router: Router) {}

  async logout() {
    await this.afAuth.signOut();
    this.router.navigate(['/login']);
  }
}
