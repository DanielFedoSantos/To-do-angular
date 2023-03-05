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

  

  taskForm! : FormGroup;

  ngOnInit(): void {

    this.taskForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      delivery_date: new FormControl('', [Validators.required]),
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

    this.onSubmit.emit(this.taskForm.value)
  }

}
