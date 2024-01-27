import { Component, Input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);
@Component({
  selector: 'app-usrcard',
  standalone: true,
  imports: [FontAwesomeModule,NgStyle],
  templateUrl: './usrcard.component.html',
  styleUrl: './usrcard.component.css'
})
export class UsrcardComponent {
@Input() member:any;

}
