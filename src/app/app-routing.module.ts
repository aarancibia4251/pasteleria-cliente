import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/seller' },
  { path: 'seller', loadChildren: () => import('../core/presentation/seller/seller.module').then(m => m.SellerModule) },
  { path: 'customer', loadChildren: () => import('../core/presentation/customer/customer.module').then(m => m.CustomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
