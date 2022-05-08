import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes, {
        useHash: true
      })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
