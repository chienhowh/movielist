import { AuthService } from './movie-list/auth/auth.service';
import { UserLoginService } from 'src/app/core/services/user-login.service';

import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { PersonComponent } from './person/person.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {
  AccountBookOutline, HeartFill, HeartOutline, MenuOutline,
  CloseOutline, DashOutline, BookOutline, UnorderedListOutline, BookFill, PlusOutline, ToTopOutline, CommentOutline, FolderAddOutline, CheckOutline
} from '@ant-design/icons-angular/icons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NZ_I18N, zh_TW } from 'ng-zorro-antd/i18n';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { registerLocaleData, CommonModule } from '@angular/common';
import zh from '@angular/common/locales/zh';

import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './movie-list/auth/login/login.component';
import { SignupComponent } from './movie-list/auth/signup/signup.component';


registerLocaleData(zh);
const icons: IconDefinition[] = [AccountBookOutline, HeartFill, HeartOutline, MenuOutline,
  CloseOutline, DashOutline, UnorderedListOutline, BookOutline, PlusOutline, ToTopOutline,
  BookFill, CommentOutline, FolderAddOutline, CheckOutline];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PersonComponent,

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
    NzDropDownModule,
    RouterModule,
    NzIconModule.forRoot(icons),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_TW },
    { provide: UserLoginService, useExisting: AuthService }
  ],
  entryComponents: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
