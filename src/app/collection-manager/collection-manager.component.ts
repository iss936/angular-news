import { Component, OnInit, Input } from '@angular/core';
import { Collection } from '../collection';

@Component({
  selector: 'app-collection-manager',
  templateUrl: './collection-manager.component.html',
  styleUrls: ['./collection-manager.component.css']
})
export class CollectionManagerComponent implements OnInit {

  constructor() { }

  @Input() collection: Collection;

  ngOnInit() {
  }

}
