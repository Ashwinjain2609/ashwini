import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id:any;
  studentForm: FormGroup;
  rollno:string = '';
  fname:string = '';
  lname:string = '';
  standard:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
    this.studentForm = this.formBuilder.group({
      'rollno' : [null, Validators.required],
      'fname' : [null, Validators.required],
      'lname' : [null, Validators.required],
      'standard' : [null, Validators.required]
    });
  }

  getBook(id) {
    this.api.getBook(id).subscribe(data => {
      this.id = data._id;
      this.studentForm.setValue({
        rollno: data.rollno,
        fname: data.fname,
        lname: data.lname,
        standard: data.standard
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateBook(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/student-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  bookDetails() {
    this.router.navigate(['/student-details', this.id]);
  }
}
