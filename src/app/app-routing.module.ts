import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './user/_guards/authentication.guard';
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: 'app/home/home.module#HomeModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'business_profile',
        loadChildren: 'app/business-profile/business-profile.module#BusinessProfileModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'promotions',
        loadChildren: 'app/promotions/promotions.module#PromotionsModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'dashboard',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard]
      }

      /* define app module routes here, e.g., to lazily load a module
         (do not place feature module routes here, use an own -routing.module.ts in the feature instead)
       */
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
