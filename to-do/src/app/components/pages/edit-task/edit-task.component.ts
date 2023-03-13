import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Router, ActivatedRoute } from '@angular/router';

import { MessagesService } from 'src/app/services/messages.service';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  btnText: string = "Editar"

  task!: Task

  constructor (
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute, 
    private messagesService: MessagesService,
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    
    this.taskService.getTask(id).subscribe((item) => this.task = item)

  }

  async editTask(task: Task) {

    console.log("aaaaaaaaaaaa",task)
    task.edition_date = this.taskService.generateNowDate()
    await this.taskService.editTask(task).subscribe((item) => this.task = item)

    this.messagesService.add("Tarefa atualizada!")

    this.router.navigate([`/tasks/detail/${this.task.id}`])

  }

}
