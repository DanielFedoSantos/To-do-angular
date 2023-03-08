import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { DetailTaskComponent } from './components/pages/detail-task/detail-task.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewTaskComponent } from './components/pages/new-task/new-task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tasks/new', component: NewTaskComponent},
  {path: 'tasks/detail/:id', component: DetailTaskComponent},
  {path: 'tasks/edit/:id', component: EditTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
