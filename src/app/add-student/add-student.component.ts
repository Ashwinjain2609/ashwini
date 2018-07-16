import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private studentService: StudentService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [], 
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      standard: ['', Validators.required],
      test: ['', Validators.required]
    });
  }

  onSubmit() {
    this.studentService.createStudent(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-student']);
      });
  }

}
