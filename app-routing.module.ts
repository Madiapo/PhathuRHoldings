import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BankingdetailsComponent } from './profile/bankingdetails/bankingdetails.component';
import { CompanyaddressComponent } from './profile/companyaddress/companyaddress.component';
import { CompanydetailsComponent } from './profile/companydetails/companydetails.component';

import { LoginComponent } from './profile/login/login.component';
import { PersonaldetailsComponent } from './profile/personaldetails/personaldetails.component';
import { PhysicaladdressComponent } from './profile/physicaladdress/physicaladdress.component';
import { SecuritydetailsComponent } from './profile/securitydetails/securitydetails.component';
import { LandingpageComponent } from './profile/landingpage/landingpage.component';
import { VerifyaccountComponent } from './profile/verifyaccount/verifyaccount.component';
import { ProductspageComponent } from './components/productspage/productspage.component';
import { AdditionalproductsComponent } from './components/additionalproducts/additionalproducts.component';
import {  AddproductsComponent } from './components/addproducts/addproducts.component';
import {  ClientprofileComponent } from './components/clientprofile/clientprofile.component';
import {  DeliveriespageComponent } from './components/deliveriespage/deliveriespage.component';
import {  FundspageComponent } from './components/fundspage/fundspage.component';
import { FundsOutComponent } from './components/funds-out/funds-out.component';
import { TrainingpageComponent } from './components/trainingpage/trainingpage.component';
import { TrainingpaymentComponent } from './components/trainingpayment/trainingpayment.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo:'landingpage'},

  { path: 'landingpage', component: LandingpageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'personaldetails', component: PersonaldetailsComponent },
  { path: 'physicaladdress', component: PhysicaladdressComponent },
  { path: 'companydetails', component: CompanydetailsComponent },
  { path: 'companyaddress', component: CompanyaddressComponent },
  { path: 'bankingdetails', component: BankingdetailsComponent },
  { path: 'securitydetails', component: SecuritydetailsComponent },
  { path:'verifyaccount' , component: VerifyaccountComponent},
  { path: 'productspage' , component: ProductspageComponent },
  { path: 'addproducts' , component: AddproductsComponent },
  { path: 'clientprofile' , component: ClientprofileComponent},
  { path: 'deliveriespage' , component: DeliveriespageComponent},
  { path: 'fundspage' , component: FundspageComponent },
  { path: 'additionalproducts' , component: AdditionalproductsComponent },
  { path: 'trainingpage' , component: TrainingpageComponent },
  { path: 'trainingpayment' , component: TrainingpaymentComponent },
  { path: 'fundsout', component: FundsOutComponent },
  {
    path: 'form-stepper',
    loadChildren: () => import('./pages/form-stepper/form-stepper.module').then( m => m.FormStepperPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
