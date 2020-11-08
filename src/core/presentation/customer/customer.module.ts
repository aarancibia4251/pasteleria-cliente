import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'crear', component: CreateCustomerComponent },
  { path: 'editar/:id', component: CreateCustomerComponent },
];

@NgModule({
  declarations: [CustomerComponent, CreateCustomerComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class CustomerModule { }
