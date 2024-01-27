import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitlesectionComponent } from './titlesection/titlesection.component';
import { ViewsectionComponent } from './viewsection/viewsection.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TitlesectionComponent,ViewsectionComponent,TaskListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';
}
