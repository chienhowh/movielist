import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecificTypeRoutingModule } from './specific-type-routing.module';
import { SpecificTypeComponent } from './specific-type.component';


@NgModule({
  declarations: [
    SpecificTypeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SpecificTypeRoutingModule,
    SharedModule,
  ]
})
export class SpecificTypeModule { }
