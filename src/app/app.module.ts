import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { DemoComponent } from './demo/demo.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HomeSlipComponent } from './home-screen/home-slip/home-slip.component';
import { HomeBillComponent } from './home-screen/home-bill/home-bill.component';
import { HomeAdvanceComponent } from './home-screen/home-advance/home-advance.component';
import { HomeExpensesComponent } from './home-screen/home-expenses/home-expenses.component';
import { HomeTotalComponent } from './home-screen/home-total/home-total.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    HomeScreenComponent,
    HomeSlipComponent,
    HomeBillComponent,
    HomeAdvanceComponent,
    HomeExpensesComponent,
    HomeTotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
