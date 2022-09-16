import { Injectable } from '@angular/core';
import { Student } from '../Models/student';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  studentsRef: AngularFireList<any>;
  studentRef : AngularFireObject<any>;

  constructor(private db:AngularFireDatabase) { }

  addStudent(student:Student){
    this.studentsRef.push({
      firstName: student.firstName,
      lastName: student.lastName,
      email : student.email,
      mobileNumber : student.mobileNumber
    })
  }


  getStudent(id:string){
    this.studentRef = this.db.object('student-list/' + id);
    return this.studentRef;
  }

  getStudentsList(){
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }


  updateStudent(student:Student){
    this.studentRef.update({
      firstName : student.firstName,
      lastName : student.lastName,
      email : student.email,
      mobileNumber : student.mobileNumber
    })
  }


  deleteStudent(id:string){
    this.studentRef = this.db.object('student-list/' + id);
    this.studentRef.remove();
  }

}
