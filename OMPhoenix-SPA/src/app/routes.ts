import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesOfferComponent } from './servicesOffer/servicesOffer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { MachineAddComponent } from './machine/machine-add/machine-add.component';
import { AuthGuard } from './_guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './whyUs/whyUs.component';
import { IndoComponent} from './indo/indo.component';
import { MarkComponent} from './mark/mark.component';
import { ParkersComponent} from './parkers/parkers.component';
import { AirnetComponent } from './airnet/airnet.component';


export const appRoutes: Routes = [
    {
      path: '',
      canActivateChild: [AuthGuard],
      children: [
        { path: 'home', component: HomeComponent, data: {}},
        { path: 'service', component: ServicesOfferComponent, data: {}},
        { path: 'product', component: ProductComponent, data: {} },
        { path: 'admin', component: AdminComponent, data: { allowedRoles: ['admin']}},
        { path: 'contact', component: ContactComponent, data: {}},
        { path: 'machineadd', component: MachineAddComponent, data: { allowedRoles: ['user', 'admin'] }},
        { path: 'WhyUs', component: WhyUsComponent, data: {} },
        { path: 'about', component: AboutComponent, data: {} },
        { path: 'indo', component: IndoComponent, data: {} },
        { path: 'mark', component: MarkComponent, data: {} },
        { path: 'parkers', component: ParkersComponent, data: {} },
        { path: 'airnet', component: AirnetComponent, data: {} },
        { path: '**', redirectTo: '' }
      ]
    }
  ];
// export const appRoutes: Routes = [
//     { path: 'home', component: HomeComponent },
//     { path: 'service', component: ServicesOfferComponent },
//     { path: 'product', component: ProductComponent },
//     { path: 'contact', component: ContactComponent },
//     { path: 'machineadd', component: MachineAddComponent, canActivate: [AuthGuard]},
//     { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
//     { path: 'WhyUs', component: WhyUsComponent },
//     { path: 'about', component: AboutComponent },
//     { path: 'indo', component: IndoComponent },
//     { path: 'mark', component: MarkComponent },
//     { path: 'parkers', component: ParkersComponent },
//     { path: 'airnet', component: AirnetComponent },
//     { path: '**', redirectTo: 'home', pathMatch: 'full'}
// ];
