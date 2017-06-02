import { Component, Input, OnInit } from '@angular/core';
import { Collection }    from '../collection';
import { CollectionService} from  '../collection/collection.service';


@Component({
  selector: 'app-collection-form',
  templateUrl: './collection-form.component.html',
  styleUrls: ['./collection-form.component.css']
})
export class CollectionFormComponent implements OnInit {

  constructor(
      private collectionService: CollectionService,
  ) { }

  @Input() collection: Collection;
  name;

  submitted = false;

  onSubmit() { this.submitted = true; }

  newCollection(){
     this.collection = {"name": this.name, "fav": []};
     this.collectionService.addItem(this.collection);
  }

  ngOnInit() {
  }

}
