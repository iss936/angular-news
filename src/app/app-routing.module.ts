import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NewsWithoutSourceComponent } from './news-without-source/news-without-source.component';
import { NewsNotFoundSourceComponent } from './news-not-found-source/news-not-found-source.component';
import { CollectionPanelComponent } from './collection-panel/collection-panel.component';
import { CollectionNotFoundComponent } from './collection-not-found/collection-not-found.component';
import { CollectionComponent } from './collection/collection.component';

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
{ path: 'collection-content', component: CollectionPanelComponent,

children: [
    {
        path: '',
        component: CollectionNotFoundComponent
    },
    {
        path: ':id',
        component: CollectionComponent
    }
]
},
{ path: '**', redirectTo: '' }

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
