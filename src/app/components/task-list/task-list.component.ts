import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks!: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    // Start the component bringing the complete task list
    this.tasks = this.taskService.getTasks();
  }
  // Delete task
  deleteTask(index: number) {
    this.taskService.deleteTask(index);
  }
  // Marck task as completed
  markTaskAsCompleted(index: number) {
    this.taskService.markTaskAsCompleted(index);
  }
}
