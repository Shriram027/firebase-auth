import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import Validation from 'src/app/validation';
// import { ConfirmedValidator } from '../../validation';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title: string = "Signup";
  data: any;
  signUpForm: FormGroup;
  submitted: boolean = false;
  imgChangeEvt: any = '';
  


  

  constructor(public auth: AuthService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['',[Validators.required, Validators.pattern("[a-zA-Z ]*"),Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      password: ['', [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)]],
      confirmpwd: ['', Validators.required],
      photoURL: ['', Validators.required]
    },
    {
      validators: [Validation.match('password', 'confirmpwd')]
      // validator: ConfirmedValidator('password', 'confirm_password')
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  onFileChange(event: any): void {
    this.imgChangeEvt = event;
}


  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    this.data = this.signUpForm.value;
    console.log(this.data.email,this.data.password);
    this.auth.signUp(this.data.email, this.data.password);
  }

  reset() {
    this.submitted = false;
    this.signUpForm.reset();
  }

}
