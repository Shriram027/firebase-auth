import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import Validation from 'src/app/validation';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title: string = "Signup";
  data: any;
  loginForm: FormGroup
  submitted: boolean = false;

  constructor(public auth: AuthService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['',[Validators.required, Validators.pattern("[a-zA-Z ]*")]],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]],
      password: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      confirmpwd: ['', Validators.required],
      photoURL: ['', Validators.required]
    },
    {
      validators: [Validation.match('password', 'confirmpwd')]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.data = this.loginForm.value;
    console.log(this.data.email,this.data.password);
    this.auth.signUp(this.data.email, this.data.password);
  }

  reset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
