import { SharedModule } from './shared/shared.module';
import { MovieDetailComponent } from './movie-list/homepage/movie-detail/movie-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AccountBookOutline, HeartFill, HeartOutline, MenuOutline, CloseOutline } from '@ant-design/icons-angular/icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { registerLocaleData, CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);
const icons: IconDefinition[] = [AccountBookOutline, HeartFill, HeartOutline, MenuOutline, CloseOutline];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NzIconModule.forRoot(icons)
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_TW }],
  entryComponents: [MovieDetailComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
