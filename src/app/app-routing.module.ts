import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OpdrachtDetailComponent} from "./opdracht-detail/opdracht-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'opdracht/:id', component: OpdrachtDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class IPMEDT2RoutingModule {
}
