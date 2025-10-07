import { Component } from '@angular/core';
import { TaskFormComponent } from './task-form/task-form';
import { TaskListComponent } from './task-list/task-list';
import { SummaryComponent } from './summary/summary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent, SummaryComponent],
  template: `
    <div class="container mt-5">
      <div class="card shadow-lg">
        <div class="card-body">
          <h1 class="card-title text-center mb-4">Task Manager</h1>
          
          <app-task-form></app-task-form>
          <app-task-list></app-task-list>
          <app-summary></app-summary>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {}
