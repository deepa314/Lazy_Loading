import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'profile',
    loadChildren:()=>import('./profile/profile.module').then(m=>m.ProfileModule)
  },
  {
    path:'shopping-list',
    loadChildren:()=>import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
