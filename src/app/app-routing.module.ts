import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsWithoutSourceComponent } from './news-without-source/news-without-source.component';
import { NewsNotFoundSourceComponent } from './news-not-found-source/news-not-found-source.component';

import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';


const routes: Routes = [
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'news-content', component: NewsWithoutSourceComponent, 

    children: [
      {
        path: '',
        component: NewsNotFoundSourceComponent
      },
      {
        path: ':id',
        component: NewsComponent
      }
    ]
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthService],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}