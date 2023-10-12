import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Load tasks from local storage
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }
  // Gets all tasks
  getTasks(): Task[] {
    return this.tasks;
  }
  // Add new Task
  addTask(task: Task) {
    this.tasks.push(task);
    this.saveTasksToLocalStorage();
  }
  // Delete task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
  }
  // Mark task as completed
  markTaskAsCompleted(index: number) {
    this.tasks[index].completed = true;
    this.saveTasksToLocalStorage();
  }
  // Save task to local storage
  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}

