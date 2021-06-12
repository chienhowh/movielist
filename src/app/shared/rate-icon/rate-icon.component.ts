import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.scss']
})
export class RateIconComponent implements OnInit {
  // 分數
  @Input() rate: string;

  // 儀表板長度
  circleRate:number;
  // 儀表板顏色
  circleColor: string;
  constructor() { }

  ngOnInit(): void {
    this.circleRate = +this.rate;
    if (+this.rate >= 7) { this.circleColor = 'green'; }
    else if (+this.rate >= 4) { this.circleColor = 'orange'; }
    else { this.circleColor = 'red'; }
  }

}
