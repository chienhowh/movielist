import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.scss']
})
export class RateIconComponent implements OnInit {
  @Input() rate: string;
  circleColor: string;
  constructor() { }

  ngOnInit(): void {
    if (+this.rate >= 7) { this.circleColor = 'green'; }
    else if (+this.rate >= 4) { this.circleColor = 'orange'; }
    else { this.circleColor = 'red'; }
  }

}
