import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { AhmedRoutingModule } from './ahmed-routing.module';
import { AhmedComponent } from './ahmed.component';
import { ProfileComponent } from '@app/ahmed/components/profile/profile.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, AhmedRoutingModule],
  declarations: [AhmedComponent, ProfileComponent]
})
export class AhmedModule {}
