import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { InicioComponent } from './inicio/inicio.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path: '',
    component: SalesComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'sale',
    component: SaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
