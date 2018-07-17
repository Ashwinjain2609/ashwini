import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { AuthenticationService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { StudentService } from './service/student.service';
import { AddSubjectComponent } from './add-subject/add-subject.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddStudentComponent,
    EditStudentComponent,

    ListStudentComponent,

    AddSubjectComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
