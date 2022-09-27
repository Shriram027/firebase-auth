import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  title: string = "Login";
  email:string;
  password:string;

  constructor(public auth: AuthService, public router:Router) { }

  ngOnInit(): void {
  }

  GoogleAuth(){
    let data = this.auth.GoogleAuth();
    if(data){
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Unable to login");
    }
  }

  signIn(email,password){
    let data = this.auth.signIn(email,password);
    if(data){
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Unable to login");
    }
  }

}
