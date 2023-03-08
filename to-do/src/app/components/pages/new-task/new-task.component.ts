import { Component } from '@angular/core';

import { Task } from 'src/app/Task';

import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {

  btnText: string = "Criar Tarefa!"

  constructor (private taskService: TaskService, private router: Router) { }

 async createTask(task: Task) {
  task.creation_date = this.taskService.generateNowDate()
  await this.taskService.createTask(task).subscribe()

  alert("Tarefa adicionada com sucesso")
 
  this.router.navigate(['/'])

}

}
