import { Component, OnInit } from '@angular/core';

import { TaskService } from '../../services/task.service';
import Task from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Array<Task> = [];

  // To use a service, you need to add it as a provider in the constructor
  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // subscribe to an observable, and continuously listen to it
    // .subscribe() kinda like .then()
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe(() => {
      this.tasks = this.tasks.filter((item) => item.id !== task.id);
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;

    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(newTask: Task): void {
    this.taskService.addTask(newTask).subscribe((task) => {
      this.tasks.push(task);
    });
  }
}
