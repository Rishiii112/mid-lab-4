import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService, Task } from '../task.service';
import { TaskFilterComponent } from '../task-filter/task-filter';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TaskFilterComponent],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {
  newTask = '';
  editText = '';
  editingId: number | null = null;

  constructor(public taskService: TaskService) {}

  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask);
      this.newTask = '';
    }
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  startEdit(task: Task) {
    this.editingId = task.id;
    this.editText = task.title;
  }

  saveEdit(task: Task) {
    if (this.editText.trim()) {
      this.taskService.editTask(task.id, this.editText);
    }
    this.editingId = null;
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
