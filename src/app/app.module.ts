import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CallApiService }  from './call-api.service';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule }     from './app-routing.module';
import { NewsWithoutSourceComponent } from './news-without-source/news-without-source.component';
import { NewsNotFoundSourceComponent } from './news-not-found-source/news-not-found-source.component';
import { HomeComponent } from './home/home.component';
import { CollectionComponent } from './collection/collection.component';
import { CollectionPanelComponent } from './collection-panel/collection-panel.component';
import { CollectionNotFoundComponent } from './collection-not-found/collection-not-found.component';
import { CollectionService } from './collection/collection.service';
import { CollectionFormComponent } from './collection-form/collection-form.component';


import { AuthService } from './auth/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { CallbackComponent } from './callback/callback.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsWithoutSourceComponent,
    NewsNotFoundSourceComponent,
    HomeComponent,
    ProfileComponent,
    CallbackComponent,
    LoginComponent
    CollectionComponent,
    CollectionPanelComponent,
    CollectionNotFoundComponent,
    CollectionFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [CallApiService, AuthGuard, CollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }