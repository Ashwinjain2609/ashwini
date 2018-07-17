import {Component, OnInit} from '@angular/core';
import {StudentService} from '../service/student.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  Student: Student;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private StudentService: StudentService) {
  }


  ngOnInit() {
    let userId = localStorage.getItem('editStudentId');
    if (!userId) {
      alert('Invalid action.');
<<<<<<< HEAD
      this.router.navigate(['list-student']);
=======
      this.router.navigate(['list-user']);
>>>>>>> f201137f410913c0ff393098ba356b7787decff4
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.StudentService.getStudentById(+userId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.StudentService.updateStudent(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['list-student']);
        },
        error => {
          alert(error);
        });
  }

}


