import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { AhmedComponent } from './ahmed.component';
import { ProfileComponent } from '@app/ahmed/components/profile/profile.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  { path: '', component: AhmedComponent, data: { title: extract('Ahmed') } },
  { path: 'profile', component: ProfileComponent, data: { title: extract('Profile') } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AhmedRoutingModule {}
