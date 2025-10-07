import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  template: `
    <ul class="list-group mb-3">
      <li *ngFor="let task of taskService.getTasks()"
          class="list-group-item d-flex align-items-center justify-content-between">
        
        <div class="d-flex align-items-center flex-grow-1">
          <input type="checkbox"
                 class="form-check-input me-2"
                 [checked]="task.completed"
                 (change)="taskService.toggleTask(task.id)" />
          
          <span [class.text-decoration-line-through]="task.completed"
                class="flex-grow-1">
            {{ task.title }}
          </span>
        </div>

        <!-- Delete button -->
        <button class="btn btn-sm btn-danger ms-2" (click)="deleteTask(task.id)">
          Delete
        </button>
      </li>
    </ul>
  `
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
