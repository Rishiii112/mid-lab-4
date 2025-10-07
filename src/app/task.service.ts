import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(title: string) {
    this.tasks.push({ id: this.nextId++, title, completed: false });
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getRemainingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }

  deleteTask (id: number) {
    this.tasks = this.tasks.filter (task => task.id !== id);
  }
}
