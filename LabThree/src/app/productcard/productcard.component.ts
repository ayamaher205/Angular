import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [NgStyle,RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
@Input() productItem:any;

constructor(private router : Router){}

redirectToDetails(id : number){
  this.router.navigate(['productdetails' , id])
}
}
