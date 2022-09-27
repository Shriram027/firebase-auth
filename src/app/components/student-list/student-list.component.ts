import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/student';
import { CrudService } from 'src/app/services/crud.service';
import {ToastrService} from 'ngx-toastr'
import { AuthService } from 'src/app/services/auth.service';
import jsPDF from 'jspdf';
import "jspdf-autotable";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  p: number = 1;
  students: Student[];
  selectedStudents: Student[];
  hideWhenNoStudent: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true; 
 
  _selectedColumns: any[]; 
  cols: any[];
  exportColumns;
  

  constructor(public crudApi: CrudService, public toastr: ToastrService, public auth:AuthService){}

  ngOnInit(): void {
    this.dataState();
    let s = this.crudApi.getStudentsList(); 
    s.snapshotChanges().subscribe(data => {
      this.students = [];
      data.forEach(item => {
        let a:any = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.students.push(a as Student);
      })
    })

    this.cols = [
      { field: "$key", header: "Student ID" },
      { field: "firstName", header: "Name" },
      { field: "standard", header: "Standard" },
      { field: "email", header: "email"},
      { field: "mobileNumber", header: "mobile"}
    ];

    this._selectedColumns = this.cols;
    this.exportColumns = this.cols.map(col => ({
      title: col.header,
      dataKey: col.field
    }));
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


  DeleteStudent(student:any) {
    console.log(student)
    if (window.confirm('Are you want to delete this student ?')) { 
      this.crudApi.deleteStudent(student.$key)
      this.toastr.success(student.firstName + ' successfully deleted!');
    }
  }


  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }


  exportPdf() {
    const doc = new jsPDF('p','pt');
    (doc as any).autoTable(this.exportColumns,this.students);
    doc.save('studentDetails.pdf');
}

}
