import { NgModule } from '@angular/core';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { DevExtremeModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    DevExtremeModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    DevExtremeModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [],
})
export class SharedModule {
  constructor(fontIcons: FaIconLibrary) {
    fontIcons.addIconPacks(fas);
  }
}
