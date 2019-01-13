import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { BsDropdownModule, BsDatepickerModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { RouterModule } from '@angular/router';
import {DataTableModule} from 'angular-6-datatable';
import { FileUploadModule } from 'ng2-file-upload';

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
import { MarkAirComponent } from './product/markAir/markAir.component';
import { ParkerComponent } from './product/parker/parker.component';
import { MachineAddComponent } from './machine/machine-add/machine-add.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { ErrorInterceptorProvider } from './_service/error.interceptor';
import { FileUploadComponent } from './fileUpload/fileUpload.component';
import { AboutComponent } from './about/about.component';
import { WhyUsComponent } from './whyUs/whyUs.component';
import { JwtModule } from '@auth0/angular-jwt';
import { IndoComponent } from './indo/indo.component';
import { MarkComponent } from './mark/mark.component';
import { ParkersComponent } from './parkers/parkers.component';
import { AirnetComponent } from './airnet/airnet.component';

export function tokenGetter() {
   return localStorage.getItem('token');
 }

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
      MarkAirComponent,
      ParkerComponent,
      MachineAddComponent,
      AdminComponent,
      FileUploadComponent,
      WhyUsComponent,
      AboutComponent,
      IndoComponent,
      MarkComponent,
      ParkerComponent,
      ParkersComponent,
      AirnetComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      ModalModule.forRoot(),
      OwlModule,
      RouterModule.forRoot(appRoutes),
      DataTableModule,
      FileUploadModule,
      BsDatepickerModule.forRoot(),
      JwtModule.forRoot({
        config: {
          tokenGetter: tokenGetter,
          whitelistedDomains: ['localhost:5000'],
          blacklistedRoutes: ['localhost:5000/api/auth']
        }
      })
   ],
   providers: [
      AuthService,
      ErrorInterceptorProvider,
      AlertifyService,
      AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
