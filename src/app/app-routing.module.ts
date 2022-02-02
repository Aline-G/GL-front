import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {CreateLineComponent} from "./home-screen/pop-up/create-line/create-line.component";
import {CreateNoteComponent} from "./home-screen/pop-up/create-note/create-note.component";
import {HomeViewExpenseBillsComponent} from "./home-view-expense-bills/home-view-expense-bills.component";
import {PopUpViewComponent} from "./home-view-expense-bills/pop-up-view/pop-up-view.component";
import {ValidationComponent} from "./validation/validation.component";
import{LogInComponent} from "./log-in/log-in.component";
import{MissionManagementComponent} from "./validation/mission-management/mission-management.component";


const routes: Routes = [
  {path: 'log-in', component: LogInComponent},
  {path: 'manager/mission', component: MissionManagementComponent},
  {path: 'colaborator/home', component: HomeScreenComponent},
  {path: 'manager/home', component: HomeScreenComponent},
  {path: 'createLine', component: CreateLineComponent},
  {path: 'createNote', component: CreateNoteComponent},
  {path: 'colaborator/viewExpense', component: HomeViewExpenseBillsComponent},
  {path: 'manager/viewExpense', component: HomeViewExpenseBillsComponent},
  {path: 'PopUpView', component:PopUpViewComponent},
  {path: 'manager/validation', component: ValidationComponent},
  {path: '**', redirectTo: '/log-in', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){}

 /* CreateNoteRoute(){
    this.router.navigate(['/pop-up']);
  }*/
}

