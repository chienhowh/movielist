import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificTypeRoutingModule } from './specific-type-routing.module';
import { SpecificTypeComponent } from './specific-type.component';
import { LaptopFileterComponent } from './content/laptop-fileter/laptop-fileter.component';
import { MobileFilterComponent } from './content/mobile-filter/mobile-filter.component';


@NgModule({
  declarations: [
    SpecificTypeComponent,
    LaptopFileterComponent,
    MobileFilterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpecificTypeRoutingModule,
    SharedModule,
  ]
})
export class SpecificTypeModule { }
