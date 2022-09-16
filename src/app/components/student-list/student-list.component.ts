import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { CrudService } from 'src/app/services/crud.service';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  p: number = 1;
  students: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;  

  constructor(public crudApi: CrudService, public toastr: ToastrService, public auth:AuthService) { }

  ngOnInit(): void {
    this.dataState();
    let s = this.crudApi.getStudentsList(); 
    s.snapshotChanges().subscribe(data => {
      this.students = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.students.push(a as Student);
      })
    })
  }


  dataState() {     
    this.crudApi.getStudentsList().valueChanges().subscribe(data => {
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoStudent = false;
        this.noData = true;
      } else {
        this.hideWhenNoStudent = true;
        this.noData = false;
      }
    })
  }


  deleteStudent(student) {
    if (window.confirm('Are you want to delete this student ?')) { 
      this.crudApi.deleteStudent(student.$key)
      this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }

}
