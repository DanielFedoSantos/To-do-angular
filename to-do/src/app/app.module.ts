import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewTaskComponent } from './components/pages/new-task/new-task.component';
import { EditTaskComponent } from './components/pages/edit-task/edit-task.component';
import { DetailTaskComponent } from './components/pages/detail-task/detail-task.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormTaskComponent } from './components/form-task/form-task.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NewTaskComponent,
    EditTaskComponent,
    DetailTaskComponent,
    HeaderComponent,
    FooterComponent,
    FormTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
