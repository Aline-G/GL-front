import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {PopUpComponent} from "./home-screen/pop-up/pop-up.component";
import {HomeAdvanceComponent} from "./home-screen/home-advance/home-advance.component";

const routes: Routes = [
  {path: 'pop-up', component: HomeAdvanceComponent},
  {path: '**', redirectTo: 'PopUpComponent', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router){}

  CreateNoteRoute(){
    this.router.navigate(['/pop-up']);
  }
}

