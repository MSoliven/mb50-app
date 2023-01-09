import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompoundInterestComponent } from './calculators/compound-interest/compound-interest.component';

const routes: Routes = [
  { path: '', component: CompoundInterestComponent },
  { path: 'compoundInterest', component: CompoundInterestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
