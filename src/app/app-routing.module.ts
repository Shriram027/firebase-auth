import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
  // { path: 'register-student', component: AddStudentComponent, canActivate:[AuthGuard] },
  { path: 'register-student', component: AddStudentComponent},
  { path: 'view-students', component: StudentListComponent},
  { path: 'edit-student/:id', component: EditStudentComponent},
  {path: '**' , component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
