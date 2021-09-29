import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificTypeComponent } from './specific-type.component';

const routes: Routes = [{ path: '', component: SpecificTypeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecificTypeRoutingModule { }
