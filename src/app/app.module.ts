import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EducationComponent } from './education/education.component';
import { PocketMoneyComponent } from './pocket-money/pocket-money.component';
import { BreadButterComponent } from './bread-butter/bread-butter.component';
import { BottombarComponent } from './bottombar/bottombar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    LandingPageComponent,
    EducationComponent,
    PocketMoneyComponent,
    BreadButterComponent,
    BottombarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
