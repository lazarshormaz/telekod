import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path:'',
  loadChildren: () => import('./shared/shared/login/login/login.module').then(m => m.LoginModule)
},
{
  path:'home',
  loadChildren: () => import('../app/shared/shared/home/home.module').then(m => m.HomeModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
