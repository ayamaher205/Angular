import { Component } from '@angular/core';
import  data from '../../assets/jsonfiles/products-list.json';
import { ProductcardComponent } from '../productcard/productcard.component';
import { RouterLink ,Router} from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { Product } from '../interface/product';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductcardComponent,RouterLink,ProductdetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
products:Product[] = data;
constructor(private router:Router){}
geturl()
{
  return this.router.url;
}

}
