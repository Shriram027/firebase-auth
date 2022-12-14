import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  public studentForm: FormGroup;

  constructor(public crudApi: CrudService, public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.crudApi.getStudentsList();
    this.studenForm();
  }

  studenForm() {
    this.studentForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      standard: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),]],
      mobileNumber: ['', [Validators.required,  Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }


  get firstName() {
    return this.studentForm.get('firstName');
  }

  get standard() {
    return this.studentForm.get('standard');
  }

  get email() {
    return this.studentForm.get('email');
  }

  get mobileNumber() {
    return this.studentForm.get('mobileNumber');
  }


  resetForm() {
    this.studentForm.reset();
  }


  submitStudentData() {
    this.crudApi.addStudent(this.studentForm.value);
    this.toastr.success(
      this.studentForm.controls['firstName'].value + ' successfully added!'
    );
    this.resetForm();
  }

}
