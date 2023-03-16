import { Component } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  no_conclude_tasks?: Task[]
  conclude_tasks?: Task[]

  localDate!: string
  
  constructor (private taskService: TaskService) { }
  
  ngOnInit(): void {

    this.localDate = this.taskService.generateNowLocalDate()

    this.taskService.getTasks().subscribe((items) => {
      items.map((item) => {
        item.delivery_date = new Date(item.delivery_date!).toLocaleDateString('pt-BR')
      })

      this.divideTasks(items)

    })
    
    
  }
  
  divideTasks(tasks: Task[]) {

    let no_conclude_tasks = []
    let conclude_tasks = []
      
    for(let task of tasks) {
      // checando vencimento
      // if (this.taskService.generateNowLocalDate() > task.delivery_date) {
      //   console.log ('Nome: ' , task.title, ' vencida')
      // }

      if (!task.conclude_date) {
        no_conclude_tasks.push(task)
        } else {
          conclude_tasks.push(task)
        }

    }

    this.no_conclude_tasks = no_conclude_tasks
    this.conclude_tasks = conclude_tasks

  }

}
