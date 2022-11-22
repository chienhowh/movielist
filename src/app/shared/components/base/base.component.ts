import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  destroyed$ = new Subject();
  constructor() { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.destroyed$.next('');
    this.destroyed$.complete();
  }

}
