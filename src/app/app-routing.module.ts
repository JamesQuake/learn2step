import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },


  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'basics',
    loadChildren: () => import('./basics/basics.module').then( m => m.BasicsPageModule)
  },
  {
    path: 'left-turn',
    loadChildren: () => import('./left-turn/left-turn.module').then( m => m.LeftTurnPageModule)
  },
  {
    path: 'right-turn',
    loadChildren: () => import('./right-turn/right-turn.module').then( m => m.RightTurnPageModule)
  },
  {
    path: 'half-turn',
    loadChildren: () => import('./half-turn/half-turn.module').then( m => m.HalfTurnPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
