import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { SellerComponent } from './seller.component';
import { CreateSellerComponent } from './create-seller/create-seller.component';
import {SharedModule} from '../shared/shared.module';
import {NgZorroAntdModule, NzGridModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: SellerComponent },
  { path: 'crear', component: CreateSellerComponent },
  { path: 'editar/:id', component: CreateSellerComponent },
];

@NgModule({
  declarations: [SellerComponent, CreateSellerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class SellerModule { }
