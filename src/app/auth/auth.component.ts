import { Component, OnInit } from '@angular/core';
import {db} from '../../utils/firebase' 
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  signUp(email:string, password:string){
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    console.log(user);
    this.router.navigate(['/products'])
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Проверьте правильность введенных вами данных")
    // ..
  });
}
}
