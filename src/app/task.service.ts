import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export type TaskFilter = 'all' | 'active' | 'completed';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private nextId = 1;

  // ✅ Current filter state (used by buttons)
  currentFilter: TaskFilter = 'all';

  // ===== Basic CRUD =====
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

  editTask(id: number, newTitle: string) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.title = newTitle;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  // ===== Filtering =====
  setFilter(filter: TaskFilter) {
    this.currentFilter = filter;
  }

  getFilteredTasks(): Task[] {
    if (this.currentFilter === 'active') {
      return this.tasks.filter(task => !task.completed);
    } else if (this.currentFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }
    return this.tasks;
  }

  // ===== Counters =====
  getTotalTasks(): number {
    return this.tasks.length;
  }

  getCompletedTasks(): number {
    return this.tasks.filter(task => task.completed).length;
  }

  getRemainingTasks(): number {
    return this.tasks.filter(task => !task.completed).length;
  }
}
