import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule, 
    MatButtonModule, 
    MatCardModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule
  ]
})
export class MaterialModule { }