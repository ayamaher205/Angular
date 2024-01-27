import { Component, Input } from '@angular/core';
import { TasksectionComponent } from '../tasksection/tasksection.component';
import { TodosectionComponent } from '../todosection/todosection.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TasksectionComponent,TodosectionComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
 @Input() listtask:any = [];
 addSection(task: any) {
  this.listtask.push(task);}
  deletSection(val : number){
    this.listtask.splice(val,1);
  }
}
