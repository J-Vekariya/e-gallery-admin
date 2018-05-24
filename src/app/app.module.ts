import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import 'hammerjs';


import { LoginComponent } from './login/login.component';
import { AppRoutinModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutinModule,
    AngularFontAwesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
