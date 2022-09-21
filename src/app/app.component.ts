import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'authProject';
  selected: string;
  studata: any = [];
  items: MenuItem[];

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Student',
        icon: 'pi pi-user',
        items: [
          {
            label: 'Add-Student',
            icon: 'pi pi-user-plus',
            routerLink : 'register-student'
          },
          {
            label: 'Student-List',
            icon: 'pi pi-users',
            routerLink : 'view-students'
          }
        ]
      },
      {
        label: 'User',
        icon: 'pi pi-user',
        items: [
          {
            label: 'SignUp',
            icon: 'pi pi-pencil',
            routerLink: 'register'
          },
          {
            label: 'SignIn',
            icon: 'pi pi-sign-in',
            routerLink: 'sign-in'
          },
          {
            label: 'SignOut',
            icon: 'pi pi-sign-out',
          routerLink: 'sign-in',
          command: () =>this.auth.signOut()
          }
        ]
      }
    ]
  }


  

}
