import { Injectable } from '@angular/core';
import { Collection } from '../collection';
import { COLLECTIONS } from './mock-collection';


@Injectable()
export class CollectionService {

  constructor() { }

  getCollections(): Promise<Collection[]> {
      return Promise.resolve(COLLECTIONS);
  }

  addItem(collection){
      COLLECTIONS.push(collection);
  }

  removeItem(name, chanel){
      let index = COLLECTIONS.map(function(e) { return e.name; }).indexOf(name);
      // TODO: remove the item from the list
  }

  modifyItem(name, chanel){
      let index = COLLECTIONS.map(function(e) { return e.name; }).indexOf(name);
      COLLECTIONS[index]['fav'].push(chanel);
  }
}
