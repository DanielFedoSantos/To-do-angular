import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewTaskComponent } from './components/pages/new-task/new-task.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'tasks/new', component: NewTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
