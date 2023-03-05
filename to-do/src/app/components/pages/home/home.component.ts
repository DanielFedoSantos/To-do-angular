import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  tasks!: Task[]

  constructor (private taskService: TaskService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((items) => {
      items.map((item) => {
        item.delivery_date = new Date(item.delivery_date!).toLocaleDateString('pt-BR')
      })

      this.tasks = items

    })
  }

}
