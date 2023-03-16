import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-detail-task',
  templateUrl: './detail-task.component.html',
  styleUrls: ['./detail-task.component.css']
})
export class DetailTaskComponent {

  task!: Task

  localDate!: string 

  constructor (
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
    ) { }

  ngOnInit(): void {

    this.localDate = this.taskService.generateNowLocalDate()
    
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.taskService.getTask(id).subscribe((item) => {

      item.delivery_date = new Date(item.delivery_date!).toLocaleDateString('pt-BR')
      
      this.task = item
    })
    
  }
  
  async completeTask () {
    
    this.task.conclude_date = this.taskService.generateNowDate()
    await this.taskService.concludeTask(this.task).subscribe((item) => this.task = item)
    
    this.messagesService.add("Tarefa concluida")
  }

   async removeTask(id: number) {

     // modal com sim e nao, se cofirmar fé, so excluir, se nao redireciona pra pagina de detalhe ou so fecha o modal
    await this.taskService.removeTask(id).subscribe()
    
    this.messagesService.add("Tarefa removida")

    this.router.navigate(['/'])


  }
  
  alertar(message: string) {
    this.messagesService.add(message)
  }

  showModal() {
    document.getElementById('modal-exclude')?.classList.toggle('active')
  }

  mostrarConsole () {
    console.log("Data atual",this.localDate)
    console.log("data de entrega",this.task.delivery_date)
  }
  

}
