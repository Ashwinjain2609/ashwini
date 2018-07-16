import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student.model';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {


  students: Student[];

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents()
      .subscribe( data => {
        this.students = data;
      });
  }

  deleteStudent(student: Student): void {
    this.studentService.deleteStudent(student.id)
      .subscribe( data => {
        this.students = this.students.filter(u => u !== student);
      })
  };

  editStudent(student: Student): void {
    localStorage.removeItem("editStudentId");
    localStorage.setItem("editStudentId", student.id.toString());
    this.router.navigate(['edit-student']);
  };

  addStudent(): void {
    this.router.navigate(['add-student']);
  };

}
