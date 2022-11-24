import { CustomlistService } from './../../../../core/services/customlist.service';
import { Observable } from 'rxjs';
import { ICustomList } from 'src/app/core/interfaces/movie.interface';
import { ROUTING_PATH } from 'src/app/core/consts/routing-path.const';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-list-page',
  templateUrl: './custom-list-page.component.html',
  styleUrls: ['./custom-list-page.component.scss']
})
export class CustomListPageComponent implements OnInit {
  ROUTING_PATH = ROUTING_PATH;
  customList$?: Observable<ICustomList[]>;
  constructor(
    private customlistSvc: CustomlistService
  ) { }

  ngOnInit(): void {
    this.customList$ = this.customlistSvc.getCustomlist();
  }
}
