import { NgModule } from '@angular/core';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CustomPreloadStrategy } from './shared/preload/custom-preload';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users/:user_name',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
    data: {
      preload: true
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/charts/charts.module').then(m => m.ChartsDemoModule),
    data: {
      preload: true
    }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes, {
        useHash: true,
      //  preloadingStrategy: PreloadAllModules
        preloadingStrategy: CustomPreloadStrategy
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
