import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { BranchesRoutingModule } from './branches-routing.module';
import { BranchesComponent } from './branches.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    BranchesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BranchesComponent]
})
export class BranchesModule {}
