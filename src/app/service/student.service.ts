import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../model/student.model';


@Injectable()
export class StudentService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/Student-portal/student';

  getStudents() {
    /* let fakeStudents = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakeStudents).delay(5000);*/
    return this.http.get<Student[]>(this.baseUrl);
  }

  getStudentById(id: number) {
    return this.http.get<Student>(this.baseUrl + '/' + id);
  }

  createStudent(user: Student) {
    return this.http.post(this.baseUrl, user);
  }

  updateStudent(user: Student) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
