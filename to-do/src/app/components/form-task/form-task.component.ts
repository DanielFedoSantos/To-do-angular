import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css']
})
export class FormTaskComponent {

  @Output() onSubmit = new EventEmitter<Task>;

  @Input() btnText!: string;

  @Input() taskData: Task | null = null

  taskForm! : FormGroup;

  ngOnInit(): void {

    this.taskForm = new FormGroup({

      id: new FormControl(this.taskData ? this.taskData.id : ''),

      creation_date: new FormControl(this.taskData ? this.taskData.creation_date : ''),
      conclude_date: new FormControl(this.taskData ? this.taskData.conclude : ''),

      title: new FormControl(this.taskData ? this.taskData.title : '', [Validators.required]),

      description: new FormControl(this.taskData ? this.taskData.description : '', [Validators.required]),
      
      delivery_date: new FormControl(this.taskData ? this.taskData.delivery_date : '', [Validators.required]),
    })
  
  }

  // getters
  get title() {
    return this.taskForm.get('title')!
  }
  get description() {
    return this.taskForm.get('description')!
  }
  get delivery_date() {
    return this.taskForm.get('delivery_date')!
  }

  submit(){
    if (this.taskForm.invalid)
    return

    if (this.taskForm.value.delivery_date.length !== 10 || this.taskForm.value.delivery_date[0] !== "2" || this.taskForm.value.delivery_date[1] !== "0") {
      alert("Data inválida")
      return
    }

    if(this.taskData?.creation_date) {
      this.taskForm.patchValue({creation_date: this.taskData.creation_date})
    }
    if(this.taskData?.conclude_date) {
      this.taskForm.patchValue({conclude_date: this.taskData.conclude_date})
    }
    if(this.taskData?.conclude) {
      this.taskForm.patchValue({conclude: this.taskData.conclude})
    }

    this.onSubmit.emit(this.taskForm.value)
  }

}
