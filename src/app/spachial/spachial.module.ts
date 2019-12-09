import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { SpachialRoutingModule } from './spachial-routing.module';
import { SpachialComponent } from './spachial.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    SpachialRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SpachialComponent]
})
export class SpachialModule {}
