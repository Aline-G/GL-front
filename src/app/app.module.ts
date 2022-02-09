import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-pop-up/home.component';
import {AppRoutingModule} from "./app-routing.module";
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
import { ConfirmationDeleteComponent } from './home-screen/pop-up/confirmation-delete/confirmation-delete.component';
import { MissionManagementComponent } from './validation/mission-management/mission-management.component';
import { PopUpChangeStateComponent } from './validation/mission-management/pop-up/pop-up-change-state/pop-up-change-state.component';
import { PopUpCreateMissionComponent } from './validation/mission-management/pop-up/pop-up-create-mission/pop-up-create-mission.component';
import { LogInComponent } from './log-in/log-in.component';
import {SortDirective} from "./sort.directive";
import { OnlyNumberDirective } from './only-number.directive';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
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
        PopUpNoteComponent,
        ConfirmationDeleteComponent,
        MissionManagementComponent,
        PopUpChangeStateComponent,
        PopUpCreateMissionComponent,
        SortDirective,
        LogInComponent,
        OnlyNumberDirective,
        OnlyNumberDirective
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
