import { Component, OnInit } from '@angular/core';
import { CallApiService }  from './call-api.service';
import { AppRoutingModule }     from './app-routing.module';
import { AuthService } from './auth/auth.service';
import { CollectionService } from './collection/collection.service';
import { Collection } from './collection';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    myCollections;
    selectedCollection: Collection;
    title = 'Infos news';
    constructor(private callApi: CallApiService, public auth: AuthService,
        private collectionService: CollectionService) {
        auth.handleAuthentication();
    }
    sources;

    ngOnInit() {
        this.getCollections();
        this.callApi.getSourcesNews().then(data => {
            this.sources = data.sources;
        });
    }

    getCollections(): void {
      this.collectionService.getCollections().then(collections => this.myCollections = collections);
    }

    onSelect(collection: Collection): void {
        this.selectedCollection = collection;
    }

    removeItem(event){
        // console.log(event);
        //
        // var target = event.target || event.srcElement || event.currentTarget;
        // var sourceId = target.id;
        // this.collectionService.removeItem(this.selectedCollection.name, sourceId);
    }
}
