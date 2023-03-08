import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
    ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.taskService.getTask(id).subscribe((item) => (this.task = item))
    
  }
  
  async completeTask () {
    
    this.task.conclude_date = this.taskService.generateNowDate()
    await this.taskService.concludeTask(this.task).subscribe((item) => this.task = item)
    
    alert("Tarefa concluida")
  }

   async removeTask(id: number) {

     // modal com sim e nao, se cofirmar fé, so excluir, se nao redireciona pra pagina de detalhe ou so fecha o modal
     alert("Voce removera pernamentemente essa tarefa!")
    await this.taskService.removeTask(id).subscribe()
    alert("Tarefa removida")

    this.router.navigate(['/'])


  }

  formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR')
  }
  
  alertar(message: string) {
    // espero que nunca seja executada
    alert(message)
  }
  

}
