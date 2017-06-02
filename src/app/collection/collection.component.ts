import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Collection }         from '../collection';
import { CollectionService } from './collection.service';
import { CollectionFormComponent} from '../collection-form/collection-form.component';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
})
export class CollectionComponent implements OnInit {
     @Input() collections: Collection[];
      collectionName;
      chanel;

  constructor(
      private collectionService: CollectionService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
      this.getCollections();
      this.route.params.subscribe((params: Params) => {
        this.chanel = params['id'];
      });
  }

  addToCollection(){
      this.collectionService.modifyItem(this.collectionName, this.chanel);
  }

  getCollections(): void {
    this.collectionService.getCollections().then(collections => this.collections = collections);
  }


}
