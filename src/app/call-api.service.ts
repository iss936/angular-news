import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { Source }           from './source';

@Injectable()
export class CallApiService {
    private newsUrl = 'http://newsapi.org/v1/sources';  // URL to web api
    constructor(private http: Http) { }

    getSourcesNews(): any {

    return this.http.get(this.newsUrl)
               .toPromise()
               .then(response => response.json() as Source[])
               .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
