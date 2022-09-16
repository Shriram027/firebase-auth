import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { AuthService } from './services/auth.service';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
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
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFireAuthModule,
     AngularFireStorageModule,
     AngularFirestoreModule,
     AngularFireDatabaseModule,
     FormsModule,
     ReactiveFormsModule,
     NgxPaginationModule,
     ToastrModule.forRoot() 

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
