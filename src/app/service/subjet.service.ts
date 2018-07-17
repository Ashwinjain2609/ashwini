import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';


@Injectable()
export class subjectervice {
  constructor(private http: HttpClient) {
  }

  baseUrl: string = 'http://localhost:8080/Student-portal/student';
  public subjectList = new BehaviorSubject<Student[]>([]);
  subjectList$ = this.subjectList.asObservable();

  getsubject() {
    /* let fakesubject = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
     {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
     {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
     {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
   ];
   return Observable.of(fakesubject).delay(5000);*/
    return this.http.get<Student[]>(this.baseUrl);
  }

  getSubjectById(id: number) {
    return this.http.get<Student>(this.baseUrl + '/' + id);
  }

  createSubject(user: Student) {
    return this.http.post(this.baseUrl, user);
  }

  updateSubject(user: Student) {
    return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteSubject(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  /**Set subject**/
  updateSubjectList(data: any): void {
    this.subjectList.next(this.subjectList.value.concat(data));
  }

  getSubjectList() {
    return this.subjectList$;
  }

}