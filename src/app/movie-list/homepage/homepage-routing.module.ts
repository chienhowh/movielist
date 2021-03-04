import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes = [
  {path:'',component:HomepageComponent}
]

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class HomepageRoutingModule{

}
