import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  title: string = "Signup";
  data: any;

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    password: new FormControl(''),
    confirmpwd: new FormControl(''),
    photoURL: new FormControl('')
  });

  submitted: boolean = false;

  constructor(public auth: AuthService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      confirmpwd: ['', Validators.required],
      photoURL: ['', Validators.required]
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
