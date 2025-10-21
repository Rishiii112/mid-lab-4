import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService, TaskFilter } from '../task.service';

@Component({
  selector: 'app-task-filter',
  imports: [CommonModule],
  templateUrl: './task-filter.html',
  styleUrls: ['./task-filter.css']
})
export class TaskFilterComponent {
  constructor(public taskService: TaskService) {}

  setFilter(filter: TaskFilter) {
    this.taskService.setFilter(filter);
  }
}
