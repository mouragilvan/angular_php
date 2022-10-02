import { BrowserModule} from "@angular/platform-browser";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from "./pages/pages.module";
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ApiService } from "./shared/services/api.service";
import { CustomerService } from "./shared/services/customer.service";

@NgModule({
  declarations: [
    AppComponent           
  ],
  imports: [    
    AppRoutingModule,
    BrowserModule,    
    CommonModule,
    PagesModule,
    HttpClientModule   
  ],
  providers: [ApiService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
