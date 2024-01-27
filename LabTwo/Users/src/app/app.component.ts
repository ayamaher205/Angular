import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsrlistComponent } from './usrlist/usrlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsrlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LabTwo';
}
