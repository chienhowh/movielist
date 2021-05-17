
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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
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
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule
  ]
})

export class MatdesignModule {

}
