import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, NoPreloading } from '@angular/router';
import { CustomPreloader } from './custom-preloader';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'home',component:HomeComponent
  },
  
  {
    path:'profile',loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule),
    data: {preload: true}
  },
  {
    path:'shopping-list',
    loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading})],
  exports: [RouterModule],
  providers:[CustomPreloader]
})
export class AppRoutingModule { }
