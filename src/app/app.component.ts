import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { User } from './Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authProject';
  selected: string;
  studata:any=[];


  constructor(public auth: AuthService) { }

  students = [
    { name: 'Add-student' },
    { name: 'Student-list'},
  ];

  users = [
    {name:'SignIn'},
    {name:'SignUp'},
    {name:'SignOut'}
  ]
  onSelected(teams){
   
  }
}
