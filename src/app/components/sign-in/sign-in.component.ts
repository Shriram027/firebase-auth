import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
data:any;
  signInForm: FormGroup;
  submitted: boolean = false;
  

  constructor(public auth: AuthService, public router:Router,public fb:FormBuilder) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signInForm.controls;
  }

  googleAuth(){
    let data = this.auth.GoogleAuth();
    if(data){
      this.router.navigate(['/dashboard']);
    }
    else{
      alert("Unable to login");
    }
  }
  onSubmit(){
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
   this.data=this.signInForm.value;
   this.auth.signIn(this.data.email, this.data.password);
  }
  
  }


