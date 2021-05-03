import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatdesignModule } from '../matdesign.module';
import { RateIconComponent } from './rate-icon/rate-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    RateIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MatdesignModule,
    RateIconComponent,
    FontAwesomeModule
  ]
})
export class SharedModule { }
