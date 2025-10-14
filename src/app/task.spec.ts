import { TestBed } from '@angular/core/testing';
import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new task', () => {
    service.addTask('Test Task');
    const tasks = service.getTasks();
    expect(tasks.length).toBe(1);
    expect(tasks[0].title).toBe('Test Task');
    expect(tasks[0].completed).toBeFalse();
  });

  it('should toggle task completion', () => {
    service.addTask('Toggle Task');
    const task = service.getTasks()[0];
    service.toggleTask(task.id);
    expect(service.getTasks()[0].completed).toBeTrue();
  });

  it('should edit a task title', () => {
    service.addTask('Old Title');
    const task = service.getTasks()[0];
    service.editTask(task.id, 'New Title');
    expect(service.getTasks()[0].title).toBe('New Title');
  });

  it('should delete a task', () => {
    service.addTask('Task to delete');
    const task = service.getTasks()[0];
    service.deleteTask(task.id);
    expect(service.getTasks().length).toBe(0);
  });
});
