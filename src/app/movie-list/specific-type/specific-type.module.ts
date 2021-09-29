import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificTypeRoutingModule } from './specific-type-routing.module';
import { SpecificTypeComponent } from './specific-type.component';


@NgModule({
  declarations: [SpecificTypeComponent],
  imports: [
    CommonModule,
    SpecificTypeRoutingModule
  ]
})
export class SpecificTypeModule { }
