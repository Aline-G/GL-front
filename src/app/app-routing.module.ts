import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {HomeScreenComponent} from "./home-screen/home-screen.component";
import {CreateLineComponent} from "./home-screen/pop-up/create-line/create-line.component";
import {CreateNoteComponent} from "./home-screen/pop-up/create-note/create-note.component";
import {HomeViewExpenseBillsComponent} from "./home-view-expense-bills/home-view-expense-bills.component";
import {PopUpViewComponent} from "./home-view-expense-bills/pop-up-view/pop-up-view.component";
import {DemoComponent} from "./demo/demo.component";
import {ValidationComponent} from "./validation/validation.component";



const routes: Routes = [
  {path: 'home', component: HomeScreenComponent},
  {path: 'createLine', component: CreateLineComponent},
  {path: 'demo', component: DemoComponent},
  {path: 'createNote', component: CreateNoteComponent},
  {path: 'viewExpense', component: HomeViewExpenseBillsComponent},
  {path: 'PopUpView', component:PopUpViewComponent},
  {path: 'validation', component: ValidationComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
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

