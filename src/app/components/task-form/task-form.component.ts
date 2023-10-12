import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = new Task('', '', false);

  constructor(private taskService: TaskService) {}

  // Add task
  addTask() {
    this.taskService.addTask(this.task);
    this.task = new Task('', '', false);
  }
}
