import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { EducationComponent } from './education/education.component';
import { PocketMoneyComponent } from './pocket-money/pocket-money.component';
import { BreadButterComponent } from './bread-butter/bread-butter.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,

  },
  {
    path: 'fund-your-education',
    component: EducationComponent,
  },
  {
    path: 'earn-pocket-money',
    component: PocketMoneyComponent,
  },
  {
    path: 'earn-bread-butter',
    component: BreadButterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
