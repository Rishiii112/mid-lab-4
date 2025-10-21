import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  template: `
    <div class="input-group mb-3">
      <input [(ngModel)]="newTask"
             type="text"
             class="form-control"
             placeholder="Enter new task" />
      <button (click)="addTask()" class="btn btn-primary">Add Task</button>
    </div>
  `
})
export class TaskFormComponent {
  newTask = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }
}
