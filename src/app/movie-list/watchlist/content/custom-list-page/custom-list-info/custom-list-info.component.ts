import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { ICustomList } from 'src/app/core/interfaces/movie.interface';
import { CustomlistService } from './../../../../../core/services/customlist.service';
import { MovieDetailService } from 'src/app/core/services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-custom-list-info',
  templateUrl: './custom-list-info.component.html',
  styleUrls: ['./custom-list-info.component.scss']
})
export class CustomListInfoComponent implements OnInit {
  listId?;
  displayList = [];
  listInfo?: ICustomList;
  ROUTING_PATH = ROUTING_PATH;
  constructor(
    private route: ActivatedRoute,
    private movieDetailSvc: MovieDetailService,
    private customlistSvc: CustomlistService
  ) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    if (this.listId) {
      forkJoin([this.customlistSvc.getCustomlistMovies(this.listId), this.customlistSvc.getCustomlistInfo(this.listId)]).subscribe(([movies, listInfo]) => {
        this.displayList = movies;
        console.log(movies);

        this.listInfo = listInfo as any;
      })
    }
    // if (this.listId) {
    //   this.customListPageSvc.getCustomlistByID(this.listId).pipe(
    //     switchMap(res => from(res)),
    //     mergeMap(res => this.getMovieDetailById(res.id))
    //   )
    //     .subscribe(res =>
    //       console.log('customlistbyid', res))
    // }
  }

  getMovieDetailById(id: number) {
    return this.movieDetailSvc.getMovieDetail(id);
  }

  get
}
