import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOfferComponent } from './servicesOffer/servicesOffer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MachineAddComponent } from './machine/machine-add/machine-add.component';
import { MachineEditComponent } from './machine/machine-edit/machine-edit.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServicesOfferComponent },
    { path: 'product', component: ProductComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'machineadd', component: MachineAddComponent, canActivate: [AuthGuard]},
    { path: 'machineedit', component: MachineEditComponent, canActivate: [AuthGuard]},
    { path: 'machinelist', component: MachineListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'home', pathMatch: 'full'}
];
