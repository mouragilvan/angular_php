import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { PagesRoutingModule } from './pages.routing.module';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@app/components/components.module';
import { ProductsComponent } from '@app/pages/products/products.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { SaleComponent } from './sale/sale.component';
@NgModule({
  declarations: [
   InicioComponent,
   CustomersComponent,
   CustomerComponent,
   ProductsComponent,
   ProductComponent,
   SalesComponent,
   SaleComponent
  ],
  imports: [
   PagesRoutingModule,
   CommonModule,
   ReactiveFormsModule ,
   ComponentsModule     
   ],
   
  providers: []
})
export class PagesModule { }
