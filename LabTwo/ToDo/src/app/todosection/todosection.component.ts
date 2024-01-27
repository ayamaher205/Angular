import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todosection',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todosection.component.html',
  styleUrl: './todosection.component.css'
})
export class TodosectionComponent {
  @Output() sendToParent = new EventEmitter<string>()
  //@Output() listtask:any =[];
  value: string ='';  
  addTask(){
    //this.listtask.push(this.value);
    console.log(this.value);
    this.sendToParent.emit(this.value);
    this.value=''
  }
}
