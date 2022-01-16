import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  PreloadAllModules
} from "@angular/router";

// THIS IS LOAZY LOADING MODULE STRATEGIES
const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule) },
  { path: 'page-not-found', loadChildren: () => import('./modules/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path:'**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules // ROUTINH STRATEGIES FOR PRE-LOADING MODULES
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
