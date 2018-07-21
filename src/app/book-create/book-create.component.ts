import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  studentForm: FormGroup;
  rollno:string='';
  fname:string='';
  lname:string='';
  standard:string='';
  subject:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      'rollno' : [null, Validators.required],
      'fname' : [null, Validators.required],
      'lname' : [null, Validators.required],
      'standard' : [null, Validators.required],
      'subject' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postBook(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/student-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
