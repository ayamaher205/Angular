import { Component } from '@angular/core';
import  data from '../../assets/jsonfiles/products-list.json';
import { ProductcardComponent } from '../productcard/productcard.component';
import { RouterLink ,Router} from '@angular/router';
import { ProductdetailsComponent } from '../productdetails/productdetails.component';
import { Product } from '../interface/product';
import { ProductRequestsService } from '../services/product-requests.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [ProductcardComponent,RouterLink,ProductdetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
constructor(private router:Router,private getproducts:ProductRequestsService){}
products!:Array<Product>;
geturl()
{
  return this.router.url;
}
ngOnInit(){
  this.getproducts.getProducts().subscribe((res:any)=>{
    this.products=res["products"];
  }
    );
}
}
