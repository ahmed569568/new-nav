import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    CarsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CarsComponent]
})
export class CarsModule {}
