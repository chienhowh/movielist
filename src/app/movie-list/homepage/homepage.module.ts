import { GenrePipe } from './../../core/pipes/genre.pipe';
import { SanitizeURLPipe } from './../../core/pipes/sanitize-url.pipe';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule} from './homepage-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    MovieDetailComponent,
    SanitizeURLPipe,
    GenrePipe
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ]
})
export class HomepageModule { }
