import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'about', loadChildren: './about/about.module#AboutModule' },
    { path: 'text', loadChildren: './text/text.module#TextModule' },
    { path: 'branches', loadChildren: './branches/branches.module#BranchesModule' },
    { path: 'cars', loadChildren: './cars/cars.module#CarsModule' },
    { path: 'spachial', loadChildren: './spachial/spachial.module#SpachialModule' },
    { path: 'user', loadChildren: './user/user.module#UserModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
