import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'http://localhost:3000/tasks'

  createTask(task: Task): Observable<Task> {
    console.log(task)
    return this.httpClient.post<Task>(this.url, task)
  }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.url)
  }

}
