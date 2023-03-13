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

  constructor (
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
    private messagesService: MessagesService
    ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.taskService.getTask(id).subscribe((item) => (this.task = item))
    
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

  formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR')
  }

  // confirmExclude(id: number | undefined, confimm: boolean | undefined) {
  //   // confirm("Tem certeza que deseja excluir pernamentemente essa tarefa?")
  //   if (id) {
  //     this.removeTask(id)
  //   }
  // } 

  // confirmExclude(id: number) {
    
  //   if (confirm("Tem certeza que deseja excluir pernamentemente essa tarefa?")) {
  //     this.removeTask(id)
  //   }
  // } 
  
  alertar(message: string) {
    // espero que nunca seja executada
    this.messagesService.add(message)
  }

  showModal() {
    document.getElementById('modal-exclude')?.classList.toggle('active')
  }
  

}
