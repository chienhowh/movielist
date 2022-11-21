import { CustomListPageService } from './../custom-list-page.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-list-info',
  templateUrl: './custom-list-info.component.html',
  styleUrls: ['./custom-list-info.component.scss']
})
export class CustomListInfoComponent implements OnInit {
  listId?;
  constructor(
    private route: ActivatedRoute,
    private customListPageSvc: CustomListPageService
  ) { }

  ngOnInit(): void {
    this.listId = this.route.snapshot.paramMap.get('id');
    if (this.listId) {
      this.customListPageSvc.getCustomlistByID(this.listId).subscribe(res =>
        console.log('customlistbyid', res))
    }
  }

}
