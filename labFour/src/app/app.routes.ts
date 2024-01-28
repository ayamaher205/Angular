import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

export const routes: Routes = [
    {
        path:"",
        component:HomepageComponent,
    },
    {
        path:"homepage",
        component:HomepageComponent,
    },
    {
        path:"login",
        component:LoginComponent,
        title:"Login"
    },
    {
        path:"register",
        component:RegisterComponent,
        title:"Registeration"
    },
    {
        path:"productdetails/:id",
        component:ProductdetailsComponent,
        title:"product"
    },
    {
        path:'**',
        component:NotFoundComponent,
    }

];
