import { ListAddingComponent } from './list-adding/list-adding.component';
import { SearchResultGuard } from './../../core/guard/search-result.guard';
import { SearchResultComponent } from './search-result/search-result.component';
import { HomepageComponent } from './homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTING_PATH } from '../consts/routing-path.const';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'search', component: SearchResultComponent },
  { path: ROUTING_PATH.LIST_ADDING, component: ListAddingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule {

}
