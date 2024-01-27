import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tasksection',
  standalone: true,
  imports: [],
  templateUrl: './tasksection.component.html',
  styleUrl: './tasksection.component.css'
})
export class TasksectionComponent {
  @Input() taskval:any;
  @Output() deletedtask = new EventEmitter<String>()
}
