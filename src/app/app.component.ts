import { Component } from '@angular/core';
import { getAuth, signOut } from "firebase/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'a-frontend';
  isOpenMenu = false


  logOut(){
    const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }
  toggleMenu(){
    this.isOpenMenu = !this.isOpenMenu
  }
  closeMenu(){
    this.isOpenMenu = false
  }
  
}

