import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { AuthService } from './services/auth.service';
import{FirebaseModule} from './firebase/firebase.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import {ToastrModule}  from 'ngx-toastr';
import {  NgxPaginationModule} from 'ngx-pagination';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ErrorPageComponent,
    AddStudentComponent,
    EditStudentComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNGModule,
    FirebaseModule,
     FormsModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     ToastrModule.forRoot(),
     ImageCropperModule 

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
