import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})

export class EditStudentComponent implements OnInit {
  editForm: FormGroup;


  constructor(private crudApi: CrudService, private fb: FormBuilder,
    private location: Location,
    private actRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }


  ngOnInit(): void {
    this.updateStudentData();
    const id: any = this.actRoute.snapshot.paramMap.get('id');
    this.crudApi.getStudent(id).valueChanges().subscribe((data) => {
      this.editForm.setValue(data);
    });
  }

  updateStudentData() {
    this.editForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      standard: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),]],
      mobileNumber: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    });
  }

  get firstName() {
    return this.editForm.get('firstName');
  }

  get standard() {
    return this.editForm.get('standard');
  }

  get email() {
    return this.editForm.get('email');
  }

  get mobileNumber() {
    return this.editForm.get('mobileNumber')
  }




  goBack() {
    this.location.back();
  }


  updateForm() {
    this.crudApi.updateStudent(this.editForm.value);
    this.toastr.success(this.editForm.controls['firstName'].value + ' updated successfully');
    this.router.navigate(['view-students']);
  }

}
