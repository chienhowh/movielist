import { SharedModule } from './../../shared/shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TextEllipsisPipe } from './../../core/pipes/text-ellipsis.pipe';
import { GenrePipe } from './../../core/pipes/genre.pipe';
import { SanitizeURLPipe } from './../../core/pipes/sanitize-url.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
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
    FormsModule,
    SwiperModule,
    NzModalModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    SharedModule
  ]
})
export class HomepageModule { }
