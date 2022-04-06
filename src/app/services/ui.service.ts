import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  // pass down the info - avoid prop drillling
  private subject = new Subject<any>();

  constructor() {}

  // to toggle we need to call this function
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;

    // emit new value for the prop
    this.subject.next(this.showAddTask);
  }

  // to listen for the above change, we need to subscribe to the following function
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
