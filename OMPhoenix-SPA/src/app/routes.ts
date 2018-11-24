import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOfferComponent } from './servicesOffer/servicesOffer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServicesOfferComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
