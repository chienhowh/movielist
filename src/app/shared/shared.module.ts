import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatdesignModule } from '../matdesign.module';
import { RateIconComponent } from './rate-icon/rate-icon.component';



@NgModule({
  declarations: [
    RateIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatdesignModule,
    RateIconComponent
  ]
})
export class SharedModule { }
