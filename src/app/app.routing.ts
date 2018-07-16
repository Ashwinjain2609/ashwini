import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  { path: 'edit-student', component: EditStudentComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
