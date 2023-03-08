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

  getTask(id: Number): Observable<Task> {
    const urlTask = `${this.url}/${id}`
    return this.httpClient.get<Task>(urlTask)
  }

  concludeTask(task: Task): Observable<Task> {
    const urlTask = `${this.url}/${task.id}`
    return this.httpClient.put<Task>(urlTask, task)
  }
  
  editTask(task: Task): Observable<Task> {
    const urlTask = `${this.url}/${task.id}`
    return this.httpClient.put<Task>(urlTask, task)
  }

  removeTask(id: number) {
    const urlTask =`${this.url}/${id}`
    return this.httpClient.delete(urlTask)
  }

  generateNowDate() {
    const newDate = new Date()
    const dateDay = String(newDate.getDate()).padStart(2, '0')
    const dateMonth = String(newDate.getMonth() + 1).padStart(2, '0')
    const dateYear = newDate.getFullYear()
    const date = `${dateYear}-${dateMonth}-${dateDay}`
    return date
  }

}
