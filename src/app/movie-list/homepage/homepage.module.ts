import { TextEllipsisPipe } from './../../core/pipes/text-ellipsis.pipe';
import { GenrePipe } from './../../core/pipes/genre.pipe';
import { SanitizeURLPipe } from './../../core/pipes/sanitize-url.pipe';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule} from './homepage-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import {SearchResultComponent} from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomepageComponent,
    CarouselComponent,
    MovieDetailComponent,
    SearchResultComponent,
    SanitizeURLPipe,
    GenrePipe,
    TextEllipsisPipe
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    FormsModule,
    SwiperModule
  ]
})
export class HomepageModule { }
