import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { TextRoutingModule } from './text-routing.module';
import { TextComponent } from './text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    TextRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [TextComponent]
})
export class TextModule {}
