
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  exports: [
    MatSliderModule,
    MatCarouselModule,
    IvyCarouselModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatListModule,
    MatPaginatorModule,
    MatTabsModule
  ]
})

export class MatdesignModule {

}
