import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-pop-up/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { DemoComponent } from './demo/demo.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { HomeSlipComponent } from './home-screen/home-slip/home-slip.component';
import { HomeBillComponent } from './home-screen/home-bill/home-bill.component';
import { HomeAdvanceComponent } from './home-screen/home-advance/home-advance.component';
import { HomeExpensesComponent } from './home-screen/home-expenses/home-expenses.component';
import { HomeTotalComponent } from './home-screen/home-total/home-total.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopUpComponent } from './home-pop-up/pop-up.component';
import { CreateNoteComponent } from './home-screen/pop-up/create-note/create-note.component';
import { CreateLineComponent } from './home-screen/pop-up/create-line/create-line.component';
import { CreateAdvanceComponent } from './home-screen/pop-up/create-advance/create-advance.component';
import { HomeViewExpenseBillsComponent } from './home-view-expense-bills/home-view-expense-bills.component';
import { PopUpViewComponent } from './home-view-expense-bills/pop-up-view/pop-up-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertErrorComponent } from './alert-error/alert-error.component';
import { ValidationComponent } from './validation/validation.component';
import { ValidationNavbarComponent } from './validation/validation-navbar/validation-navbar.component';
import{MatButtonModule} from "@angular/material/button";
import{MatIconModule} from "@angular/material/icon";
import { PopUpNoteComponent } from './validation/pop-up-note/pop-up-note.component';


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
    HomeTotalComponent,
    PopUpComponent,
    CreateNoteComponent,
    CreateLineComponent,
    CreateAdvanceComponent,
    HomeViewExpenseBillsComponent,
    PopUpViewComponent,
    AlertErrorComponent,
    ValidationComponent,
    ValidationNavbarComponent,
    PopUpNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
