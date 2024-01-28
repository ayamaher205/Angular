import { Component, Input } from '@angular/core';
import  data from '../../assets/jsonfiles/products-list.json';
import {Product} from '../interface/product'
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  products :Array<Product> = data;
  productsDetails:any ;
  @Input() id : number = 0;
  
  ngOnInit(){
     this.productsDetails = this.products.find((product : any) => product.id == this.id);
   }
}
