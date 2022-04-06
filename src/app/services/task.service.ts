import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import Task from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // create an observable from the param
    // const tasks = of(TASKS);

    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(taskId?: number): Observable<Task> {
    const url = `${this.apiUrl}/${taskId}`;

    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(newTask: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, newTask, httpOptions);
  }
}