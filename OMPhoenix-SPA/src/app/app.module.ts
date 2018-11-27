import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import {DataTableModule} from 'angular-6-datatable';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_service/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AlertifyService } from './_service/alertify.service';
import { FooterComponent } from './footer/footer.component';
import { ServicesOfferComponent } from './servicesOffer/servicesOffer.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { IndoForkComponent } from './product/indoFork/indoFork.component';
import { MarkAirComponent } from './product/markAir/markAir.component';
import { ParkerComponent } from './product/parker/parker.component';
import { MachineAddComponent } from './machine/machine-add/machine-add.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      FooterComponent,
      ServicesOfferComponent,
      ProductComponent,
      ContactComponent,
      IndoForkComponent,
      MarkAirComponent,
      ParkerComponent,
      MachineAddComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      OwlModule,
      RouterModule.forRoot(appRoutes),
      DataTableModule
   ],
   providers: [
      AuthService,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
