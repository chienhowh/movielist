import { SearchResultGuard } from './../../core/guard/search-result.guard';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: SearchResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {

}
