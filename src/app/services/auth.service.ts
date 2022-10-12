import { Injectable, NgZone } from '@angular/core';
import { User } from '../Models/user';
import * as auth from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  data: any;
  
  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth,
    public router: Router, public ngZone: NgZone) {

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.data = user;

        
        localStorage.setItem('user', JSON.stringify(this.data));
        // JSON.parse(localStorage.getItem('user')!);
      }
      else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    })
  }


  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  


  signUp(email:string, password:string){
    return this.afAuth.createUserWithEmailAndPassword(email,password).then((result)=>
    {
      this.sendVerificationMail();
      this.setUserData(result.user);
    })
    .catch((error)=>{
      window.alert(error.message)
    });
  }


  sendVerificationMail(){
  return this.afAuth.currentUser.then((u:any)=>u.sendEmailVerification()).then(()=>{
    this.router.navigate(['/verify-email']);
  });
}


forgotPassword(resetEmail:string){
  return this.afAuth.sendPasswordResetEmail(resetEmail).then(()=>{
    window.alert("Password reset email has been sent,Please check your inbox.");
  })
  .catch((error)=>{
    window.alert(error);
  })
}


get isLoggedIn():boolean{
  const user = JSON.parse(localStorage.getItem('user')!);
  return user !== null && user.emailVerified !==false ? true : false;
}


GoogleAuth(){
  return this.authLogin(new auth.GoogleAuthProvider()).then((res: any)=>{
    this.router.navigate(['/dashboard']);
  }).catch(()=>{
    alert("Unable to signup");
  })
}


authLogin(provider: any){
  return this.afAuth.signInWithPopup(provider).then((result)=>{
    this.router.navigate(['/dashboard']);
    this.setUserData(result.user)
  })
  .catch((error)=>{
    window.alert(error);
  })
}


setUserData(user:any){
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(
    `users/${user.uid}`
  );
  const data:User = {
    uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
  };
  return userRef.set(data,{merge:true})
}


signOut(){
  return this.afAuth.signOut().then(()=>{
    setTimeout(function(){
      localStorage.clear();
        window.location.reload();
      },100);
    this.router.navigate(['/sign-in']);
  })
}


}
