import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.html',
  styleUrls: ['./summary.css']
})
export class SummaryComponent {
  constructor(public taskService: TaskService) {}

  get remainingCount() {
    return this.taskService.getRemainingTasks();
  }

  get completedCount() {
    return this.taskService.getCompletedTasks();
  }
}
