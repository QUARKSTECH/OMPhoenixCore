import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOfferComponent } from './servicesOffer/servicesOffer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MachineAddComponent } from './machine/machine-add/machine-add.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminComponent } from './admin/admin.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServicesOfferComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'machineadd', component: MachineAddComponent, canActivate: [AuthGuard]},
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
