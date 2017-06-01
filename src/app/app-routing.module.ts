import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { NewsWithoutSourceComponent } from './news-without-source/news-without-source.component';
import { NewsNotFoundSourceComponent } from './news-not-found-source/news-not-found-source.component';

import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'news-content', component: NewsWithoutSourceComponent, 
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: NewsNotFoundSourceComponent,
        canActivate: [AuthGuard]
      },
      {
        path: ':id',
        component: NewsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, // la page de login
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthService],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
    // this.routes = routes;
}