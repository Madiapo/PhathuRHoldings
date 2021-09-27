import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';*/

//import { environment } from 'src/environments/environment';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {MatStepperModule} from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
//import { FormStepperPageRoutingModule } from './form-stepper-routing.module';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BankingdetailsComponent } from './profile/bankingdetails/bankingdetails.component';
import { CompanyaddressComponent } from './profile/companyaddress/companyaddress.component';
import { CompanydetailsComponent } from './profile/companydetails/companydetails.component';
import { LoginComponent } from './profile/login/login.component';
import { PersonaldetailsComponent } from './profile/personaldetails/personaldetails.component';
import { PhysicaladdressComponent } from './profile/physicaladdress/physicaladdress.component';
import { SecuritydetailsComponent } from './profile/securitydetails/securitydetails.component';
import { LandingpageComponent } from './profile/landingpage/landingpage.component';
import { VerifyaccountComponent } from './profile/verifyaccount/verifyaccount.component';
import { TrainingpaymentComponent } from './components/trainingpayment/trainingpayment.component';
import { FundsOutComponent } from './components/funds-out/funds-out.component';

import { ProductspageComponent } from './components/productspage/productspage.component';
import { AdditionalproductsComponent } from './components/additionalproducts/additionalproducts.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import { DeliveriespageComponent } from './components/deliveriespage/deliveriespage.component';
import { FundspageComponent } from './components/fundspage/fundspage.component';
import { TrainingpageComponent } from './components/trainingpage/trainingpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent,
  BankingdetailsComponent,
  CompanyaddressComponent,
  CompanydetailsComponent,
  PersonaldetailsComponent,
  PhysicaladdressComponent,
  SecuritydetailsComponent,
  LandingpageComponent,
  LoginComponent,
  VerifyaccountComponent,
  ProductspageComponent,
  AddproductsComponent, 
  ClientprofileComponent, 
  DeliveriespageComponent,
  FundspageComponent,
  AdditionalproductsComponent,
  TrainingpageComponent,
  TrainingpaymentComponent,
  FundsOutComponent,
],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    BrowserAnimationsModule,
    MatStepperModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    /*AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,*/
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
