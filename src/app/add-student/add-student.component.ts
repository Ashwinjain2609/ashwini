import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private studentService: StudentService) {
  }

  addForm: FormGroup;
  public studentModel: Student;
  public studentList = [];

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

  update() {
    if (this.addForm.valid) {
      const stuObj = {
        'email': this.addForm.controls['email'].value,
        'fname': this.addForm.controls['firstName'].value,
        'lname': this.addForm.controls['lastName'].value,
        'std': this.addForm.controls['standard'].value,
        'test': this.addForm.controls['test'].value
      };
<<<<<<< HEAD
      this.studentList.push(stuObj);
      this.studentService.updateStudentList(this.studentList);
=======
      this.studentService.updateStudentList(stuObj);
>>>>>>> f201137f410913c0ff393098ba356b7787decff4
      this.router.navigate(['list-student']);
    }
  }

}
