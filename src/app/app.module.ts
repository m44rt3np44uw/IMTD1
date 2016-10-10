import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {OpdrachtDetailComponent} from './opdracht-detail/opdracht-detail.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {OpdrachtComponent} from './opdracht/opdracht.component';
import {FotoComponent} from './foto/foto.component';
import {IkComponent} from './ik/ik.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {IPMEDT2RoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpdrachtDetailComponent,
    HeaderComponent,
    FooterComponent,
    OpdrachtComponent,
    FotoComponent,
    IkComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    IPMEDT2RoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
