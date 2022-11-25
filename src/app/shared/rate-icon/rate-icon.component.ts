import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate-icon',
  templateUrl: './rate-icon.component.html',
  styleUrls: ['./rate-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateIconComponent implements OnInit {
  // 分數
  @Input() rate: string;

  // 儀表板長度
  circleRate: number;
  userScore: number;
  // 儀表板顏色
  circleColor: string;
  constructor() { }

  ngOnInit(): void {
    this.circleRate = +this.rate;
    this.userScore = Math.floor(+this.rate * 10);
    if (+this.userScore >= 70) { this.circleColor = 'green'; }
    else if (+this.userScore >= 40) { this.circleColor = 'orange'; }
    else { this.circleColor = 'red'; }
  }

}
