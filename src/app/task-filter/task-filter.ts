import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, TaskFilter } from '../task.service';

@Component({
  selector: 'app-task-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="btn-group mb-3">
      <button class="btn btn-outline-primary"
              [class.active]="taskService.currentFilter === 'all'"
              (click)="setFilter('all')">
        All
      </button>

      <button class="btn btn-outline-primary"
              [class.active]="taskService.currentFilter === 'active'"
              (click)="setFilter('active')">
        Active
      </button>

      <button class="btn btn-outline-primary"
              [class.active]="taskService.currentFilter === 'completed'"
              (click)="setFilter('completed')">
        Completed
      </button>
    </div>
  `,
  styles: [`
    .btn-group .btn.active {
      background-color: #0d6efd;
      color: white;
    }
  `]
})
export class TaskFilterComponent {
  constructor(public taskService: TaskService) {}

  setFilter(filter: TaskFilter) {
    this.taskService.setFilter(filter);
  }
}
